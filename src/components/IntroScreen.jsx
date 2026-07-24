import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

/**
 * Cinematic entrance portal. Shown on first load.
 * On ENTER: zoom + fade + golden particle burst, then calls onEnter.
 */
export default function IntroScreen({ onEnter }) {
  const [leaving, setLeaving] = useState(false);
  const [burst, setBurst] = useState(false);

  const handleEnter = useCallback(() => {
    setBurst(true);
    setLeaving(true);
    setTimeout(() => onEnter(), 1500);
  }, [onEnter]);

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          key="intro"
          exit={{ opacity: 0, scale: 1.4, filter: "blur(12px)" }}
          transition={{ duration: 1.3, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "radial-gradient(ellipse at center, #0B241D 0%, #061A14 70%)" }}
        >
          <ParticleCanvas density={90} connect={false} />

          {/* burst particles */}
          <AnimatePresence>
            {burst && (
              <motion.div
                className="absolute left-1/2 top-1/2 pointer-events-none"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 8, opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              >
                {Array.from({ length: 40 }).map((_, i) => {
                  const angle = (i / 40) * Math.PI * 2;
                  const dist = 260 + Math.random() * 200;
                  return (
                    <motion.span
                      key={i}
                      className="absolute block rounded-full"
                      style={{ width: 6, height: 6, background: i % 2 ? "#D4AF37" : "#E9C46A", boxShadow: "0 0 12px #D4AF37" }}
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, opacity: 0 }}
                      transition={{ duration: 1.3, ease: "easeOut" }}
                    />
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            <motion.p
              className="font-micro uppercase tracking-[0.5em] text-gold-champagne/70 text-xs mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Hem Sheela Model United Nations
            </motion.p>
            <h1 className="font-display gold-text text-glow-gold leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              HSMUN
              <span className="block text-4xl sm:text-5xl md:text-6xl mt-3">2026</span>
            </h1>
            <motion.p
              className="font-heading italic text-parchment/80 text-lg md:text-xl mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.2 }}
            >
              Enter the World of Diplomacy
            </motion.p>

            <motion.button
              onClick={handleEnter}
              data-magnetic
              className="group mt-12 focus-gold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              aria-label="Enter the HSMUN 2026 website"
            >
              <span className="glass-strong relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-micro uppercase tracking-[0.3em] text-sm text-gold-light overflow-hidden transition-all duration-500 hover:border-gold-champagne/70 animate-glow-pulse">
                <span className="relative z-10">Enter</span>
                <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-gold-imperial transition-transform duration-500 group-hover:translate-x-1" />
                <span className="absolute inset-0 shimmer-gold animate-shimmer opacity-60" />
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 font-micro uppercase tracking-[0.3em] text-parchment/40 text-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            HSMUN - 2k26
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}