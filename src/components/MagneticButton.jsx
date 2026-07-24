import React, { useRef } from "react";
import { motion } from "framer-motion";

/**
 * Magnetic button — gently pulls toward the cursor when hovered (desktop only).
 * variant: "gold" | "glass" | "ghost"
 */
export default function MagneticButton({ children, href, onClick, variant = "gold", className = "", strength = 0.35 }) {
  const ref = useRef(null);
  const innerRef = useRef(null);

  const handleMove = (e) => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    if (innerRef.current) innerRef.current.style.transform = `translate(${x * strength * 0.5}px, ${y * strength * 0.5}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
    if (innerRef.current) innerRef.current.style.transform = "translate(0,0)";
  };

  const base = "relative inline-flex items-center justify-center font-micro uppercase tracking-[0.2em] text-sm rounded-full transition-colors duration-300 focus-gold min-h-[44px] px-8 py-4";
  const variants = {
    gold: "bg-gradient-to-r from-gold-imperial via-gold-light to-gold-imperial bg-[length:200%_auto] text-forest-deep hover:bg-[position:100%_0] animate-glow-pulse font-semibold",
    glass: "glass text-parchment hover:border-gold-champagne/60",
    ghost: "border border-gold-imperial/40 text-gold-light hover:bg-gold-imperial/10"
  };

  const content = (
    <span ref={innerRef} className="relative z-10 inline-flex items-center gap-2">
      {children}
    </span>
  );

  const Tag = href ? motion.a : motion.button;
  const props = href
    ? { href, target: href?.startsWith("http") ? "_blank" : undefined, rel: href?.startsWith("http") ? "noopener noreferrer" : undefined }
    : { type: "button", onClick };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </Tag>
  );
}