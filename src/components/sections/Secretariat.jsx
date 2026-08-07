import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";
import ParticleCanvas from "@/components/ParticleCanvas";

const MEMBERS = [
  {
    name: "Rishav Digar",
    position: "Secretary-General",
    image: "/assets/images/sg.webp",
    desc: "Providing the vision and leadership that shape HSMUN, ensuring a conference rooted in diplomacy, professionalism, and excellence."
  },
  {
    name: "Adrija Podder",
    position: "Director-General",
    image: "/assets/images/dg.webp",
    desc: "Overseeing conference operations and coordinating every aspect of HSMUN to deliver a seamless delegate experience."
  },
  {
    name: "Titir Choudhury",
    position: "Head of International Press",
    image: "/assets/images/iphead.webp",
    desc: "Leading the International Press Corps, supervising fact-checking, committee reporting, and press interactions throughout the conference."
  },
  {
    name: "Shritama Roy",
    position: "Organizing Committee Head",
    image: "/assets/images/ochead.webp",
    desc: "Managing logistics, administration, and coordination to ensure every conference operation runs efficiently."
  },
  {
    name: "D. Drishita Biswas",
    position: "Creative Manager",
    image: "/assets/images/db.webp",
    desc: "Crafting the visual identity of HSMUN through branding, design, and creative direction."
  },
  {
    name: "Adrija Maji",
    position: "Media Manager",
    image: "/assets/images/Adrija Maji.webp",
    desc: "Capturing the conference through photography, videography, and digital media while showcasing HSMUN to a wider audience."
  },
];

function PortraitCard({ member, index }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  const initials = member.position
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 60,
        filter: "blur(12px)",
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="glass rounded-2xl p-6 h-full transition-all duration-500 hover:-translate-y-2 hover:border-gold-champagne/60 hover:shadow-[0_25px_70px_rgba(212,175,55,0.18)]">

        {/* Portrait */}
        <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-forest-surface to-forest-deep">

          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-5xl gold-text opacity-80">
                {initials}
              </span>
            </div>
          )}

          {/* Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-transparent" />

          {/* Gold Reflection */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(110deg,transparent_35%,rgba(242,217,141,0.22)_50%,transparent_65%)]" />

          {/* Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-white font-heading text-lg">
              {member.name}
            </p>

            <p className="text-gold-champagne uppercase tracking-[0.25em] text-[10px] font-micro mt-1">
              {member.position}
            </p>
          </div>

        </div>

        <p className="text-sm leading-relaxed text-parchment/65">
          {member.desc}
        </p>

      </div>
    </motion.div>
  );
}

export default function Secretariat() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24 md:py-32">

      <ParticleCanvas density={35} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <Reveal variant="fade-up">
            <p className="font-micro uppercase tracking-[0.4em] text-gold-champagne/70 text-[11px] mb-4">
              — The People Behind HSMUN —
            </p>
          </Reveal>

          <Reveal variant="blur" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl text-parchment">
              Meet the{" "}
              <span className="gold-text font-display">
                Secretariat
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.2}>
            <p className="mt-6 max-w-3xl mx-auto text-parchment/65 leading-8">
              Behind every committee, every debate, and every successful
              conference is a dedicated team committed to creating an
              exceptional Model United Nations experience.
            </p>
          </Reveal>

        </div>

        {/* Members */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((member, index) => (
            <PortraitCard
              key={member.position}
              member={member}
              index={index}
            />
          ))}
        </div>

      </div>

    </section>
  );
}