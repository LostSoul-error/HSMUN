import React from "react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import ParticleCanvas from "@/components/ParticleCanvas";

const APPLY_URL = "https://forms.gle/KqNTLC5YUuuwsuon9";

export default function RegistrationCTA() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-transparent via-[#0B241D] to-[#061A14]" />
      {/* golden hour gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.16)_0%,#0B241D_45%,#061A14_80%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,#061A14,#0B241D,#061A14)] bg-[length:200%_200%] animate-gradient-shift opacity-70" />
      <ParticleCanvas density={70} />

      {/* floating gold orb */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gold-imperial/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-champagne/8 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <Reveal variant="fade-up">
          <p className="font-micro uppercase tracking-[0.4em] text-gold-champagne/70 text-[11px] mb-6">— The Conversion —</p>
        </Reveal>
        <Reveal variant="blur" delay={0.1}>
          <h2 className="font-heading text-4xl md:text-7xl text-parchment leading-tight">
            Begin Your <span className="gold-text font-display">Diplomatic</span> Journey
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={0.25}>
          <p className="font-body text-parchment/70 text-lg md:text-xl leading-relaxed mt-8 max-w-xl mx-auto">
            Step into the chamber. Take the floor. Shape the resolution. HSMUN 2026 awaits the next generation of leaders.
          </p>
        </Reveal>
        <Reveal variant="scale" delay={0.4}>
          <div className="mt-12 flex justify-center">
            <MagneticButton href={APPLY_URL} variant="gold" className="text-base px-12 py-5">
              Apply Now
            </MagneticButton>
          </div>
        </Reveal>
        <Reveal variant="fade" delay={0.55}>
          <p className="font-heading italic text-parchment/40 text-sm mt-8">Registration closes soon — secure your delegation's seat.</p>
        </Reveal>
      </div>
    </section>
  );
}