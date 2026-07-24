import React from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import GlobeWireframe from "@/components/GlobeWireframe";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function About() {
  return (
    <section className="relative min-h-screen w-full flex items-center py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <GlobeWireframe opacity={0.18} />
      </div>
      <ParticleCanvas density={40} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <Reveal variant="fade-up">
            <p className="font-micro uppercase tracking-[0.4em] text-gold-champagne/70 text-[11px] mb-5">— The Conference —</p>
          </Reveal>
          <Reveal variant="blur" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl leading-tight text-parchment">
              About <span className="gold-text font-display">HSMUN</span>
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.2}>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-gold-imperial to-transparent" />
          </Reveal>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12">
          <Reveal variant="slide-right" delay={0.15}>
            <p className="font-body text-parchment/80 text-lg leading-[1.7]">
              Now in its fourth edition, Hem Sheela Model United Nations 2026 continues its legacy of excellence by uniting the next generation of diplomats, policymakers, and leaders. More than a conference, HSMUN is an immersive experience where ideas shape resolutions, diplomacy drives progress, and every delegate has the opportunity to leave a lasting impact.
            </p>
          </Reveal>
          <Reveal variant="slide-right" delay={0.3}>
            <p className="font-body text-parchment/70 text-base leading-[1.7] mt-5">
              Beyond debate lies diplomacy. HSMUN is a place where conviction meets collaboration, where delegates become architects of consensus, and where every committee session is an opportunity to shape ideas into meaningful action.
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={0.45}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Diplomacy", "Leadership", "Prestige"].map((t) => (
                <span key={t} className="font-micro uppercase tracking-[0.2em] text-[10px] text-gold-light border border-gold-imperial/30 rounded-full px-4 py-2">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}