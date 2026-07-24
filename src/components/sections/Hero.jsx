import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlobeWireframe from "@/components/GlobeWireframe";
import ParticleCanvas from "@/components/ParticleCanvas";
import MagneticButton from "@/components/MagneticButton";
import { Download, ArrowDown } from "lucide-react";

const APPLY_URL = "https://forms.gle/2ALRwMMz3nf433sb6";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.62]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.35, 0.85]);

  return (
    <section ref={ref} className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center">
      {/* animated gradient background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[linear-gradient(125deg,#061A14_0%,#0B241D_45%,#0E2E25_70%,#061A14_100%)] bg-[length:200%_200%] animate-gradient-shift"
      />
      <div className="absolute inset-0 opacity-50">
        <GlobeWireframe />
      </div>
      <ParticleCanvas density={70} />

      {/* floating diplomatic connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="url(#lineGrad)" strokeWidth="0.7" fill="none">
          <path d="M 0 200 Q 400 60 800 260 T 1600 200" />
          <path d="M 0 500 Q 500 360 1000 540 T 1600 480" />
          <path d="M 0 760 Q 600 620 1200 800 T 1600 740" />
        </g>
      </svg>

      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-b from-forest-deep/30 via-transparent to-forest-deep" />

      <motion.div style={{ scale: titleScale, y: titleY, opacity: titleOpacity }} className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-micro uppercase tracking-[0.45em] text-gold-champagne/70 text-[10px] md:text-xs mb-6"
        >
          Hem Sheela Model United Nations
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display gold-text text-glow-gold leading-[0.95] text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          HSMUN 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="font-heading italic text-parchment/85 text-lg md:text-2xl mt-6 max-w-xl"
        >
          Pax Per Veritatem
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <MagneticButton href={"https://forms.gle/2ALRwMMz3nf433sb6"} variant="gold">
            Apply Now
          </MagneticButton>
          {/* <MagneticButton href="#" variant="glass">
            <Download className="w-4 h-4" /> Brochure
          </MagneticButton> */}
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: titleOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-parchment/50"
      >
        <span className="font-micro uppercase tracking-[0.3em] text-[10px]">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}