import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * 1px golden progress line fixed at the very top — "Ghost Progress Bar".
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ width }}
      className="fixed top-0 left-0 h-[2px] z-[80] bg-gradient-to-r from-gold-imperial via-gold-light to-gold-champagne"
      aria-hidden="true"
    />
  );
}