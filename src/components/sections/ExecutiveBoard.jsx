import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";

const CHAIRS = [
  {
    title: "Chair",
    members: [
      {
        name: "Chair — AIPPM",
        desc: "Name",
        image: "\\assets\\images\\test.jpg",
      },
      {
        name: "Chair — DISEC",
        desc: "Name",
        image: "\\assets\\images\\test.jpg",
      },
      {
        name: "Chair — ICC",
        desc: "Name",
        image: "\\assets\\images\\test.jpg",
      },
    ],
  },
  {
    title: "Vice Chair",
    members: [
      {
        name: "Vice Chair — AIPPM",
        desc: "Name",
        image: "\\assets\\images\\test.jpg",
      },
      {
        name: "Vice Chair — DISEC",
        desc: "Name",
        image: "\\assets\\images\\test.jpg",
      },
      {
        name: "Vice Chair — ICC",
        desc: "Name",
        image: "\\assets\\images\\test.jpg",
      },
    ],
  },
];

function BoardCard({ member, index, direction }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const x = direction === "left" ? -80 : 80;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, filter: "blur(14px)" }}
      animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <div className="glass rounded-2xl p-7 h-full transition-all duration-500 group-hover:scale-[1.03] group-hover:border-gold-champagne/70 group-hover:shadow-[0_24px_70px_rgba(212,175,55,0.2)]">
<div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
</div>
        <h3 className="font-heading text-xl text-parchment">{member.name}</h3>
        <p className="font-body text-parchment/60 text-sm leading-relaxed mt-2">{member.desc}</p>
      </div>
    </motion.div>
  );
}

export default function ExecutiveBoard() {
  return (
    <section className="relative min-h-screen w-full flex items-center py-24 md:py-32 overflow-hidden bg-gradient-to-b from-forest-deep via-forest-surface to-forest-deep">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="text-center mb-16">
          <Reveal variant="fade-up">
            <p className="font-micro uppercase tracking-[0.4em] text-gold-champagne/70 text-[11px] mb-4">— Presiding Officers —</p>
          </Reveal>
          <Reveal variant="blur" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl text-parchment">Executive <span className="gold-text font-display">Board</span></h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {CHAIRS.map((col, ci) => (
            <div key={col.title}>
              <Reveal variant={ci === 0 ? "slide-left" : "slide-right"}>
                <h3 className="font-ceremonial text-gold-light text-2xl mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-gold-imperial" />
                  {col.title}
                </h3>
              </Reveal>
              <div className="grid gap-6">
                {col.members.map((m, i) => (
                  <BoardCard key={m.name} member={m} index={i} direction={ci === 0 ? "left" : "right"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}