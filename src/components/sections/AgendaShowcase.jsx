import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";

const AGENDAS = [
  {
    tag: "AIPPM",
    text: "Deliberation on the Rising Incidence of Examination Paper Leaks in India",
  },
  {
    tag: "DISEC",
    text: "Addressing the Escalation of the Iran–Israel Conflict and its Implications for International Peace and Security",
  },
  {
    tag: "ICC",
    text: "The Prosecutor v. Vladimir Vladimirovich Putin — Alleged War Crimes and Crimes Against Humanity Arising from the Russo–Ukrainian Conflict",
  },
];

export default function AgendaShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 w-full">
        <div className="text-center mb-20">
          <Reveal variant="fade-up">
            <p className="font-micro uppercase tracking-[0.4em] text-gold-champagne/70 text-[11px] mb-4">— At the Heart of Diplomacy —</p>
          </Reveal>
          <Reveal variant="blur" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl text-parchment">Agenda <span className="gold-text font-display">Showcase</span></h2>
          </Reveal>
        </div>

        <div className="relative pl-8 md:pl-12">
          {/* golden timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gold-imperial/15" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-0 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-gold-imperial via-gold-light to-gold-champagne"
          />

          {AGENDAS.map((a, i) => (
            <AgendaItem key={a.tag} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AgendaItem({ a, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.4"] });
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(14px)", "blur(0px)"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ filter: blur, opacity, x }}
      className="relative mb-14 last:mb-0"
    >
      <div className="absolute -left-[34px] md:-left-[46px] top-1.5 w-3.5 h-3.5 rounded-full bg-gold-imperial border-2 border-forest-deep shadow-[0_0_16px_rgba(212,175,55,0.7)]" />
      <p className="font-micro uppercase tracking-[0.3em] text-gold-champagne text-[11px] mb-2">{a.tag}</p>
      <p className="font-heading italic text-parchment/90 text-xl md:text-3xl leading-snug max-w-2xl">{a.text}</p>
    </motion.div>
  );
}