import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Scroll-driven reveal wrapper.
 * variants: fade-up | fade | slide-left | slide-right | blur | scale
 */
const variantMap = {
  "fade-up": { hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0 } },
  "fade": { hidden: { opacity: 0 }, show: { opacity: 1 } },
  "slide-left": { hidden: { opacity: 0, x: -70 }, show: { opacity: 1, x: 0 } },
  "slide-right": { hidden: { opacity: 0, x: 70 }, show: { opacity: 1, x: 0 } },
  "blur": { hidden: { opacity: 0, filter: "blur(16px)", y: 30 }, show: { opacity: 1, filter: "blur(0px)", y: 0 } },
  "scale": { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }
};

export default function Reveal({ children, variant = "fade-up", delay = 0, duration = 0.9, className = "", once = true, as = "div" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });
  const MotionTag = motion[as] || motion.div;
  const v = variantMap[variant] || variantMap["fade-up"];
  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={v}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}