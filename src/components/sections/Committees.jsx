
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";
// import { Image } from "@/components/ui/image";

const COMMITTEES = [
  {
    name: "AIPPM",
    full: "All India Political Parties Meet",
    agenda: "Deliberation on the Rising Incidence of Examination Paper Leaks in India",
    desc: "A high-intensity parliamentary simulation where delegates represent India's political parties, debate national policies, negotiate alliances, and shape the country's legislative future.",
    image: "\\assets\\committees\\aippm.jpg",
    hue: "from-orange-900/60 to-forest-deep",
  },
  {
    name: "DISEC",
    full: "Disarmament and International Security Committee",
    agenda: "Addressing the Escalation of the Iran–Israel Conflict and its Implications for International Peace and Security",
    desc: "The First Committee of the United Nations General Assembly, focused on maintaining international peace, security, disarmament, and diplomatic cooperation.",
    image: "\\assets\\committees\\disec.jpg",
    hue: "from-blue-900/60 to-forest-deep",
  },
  {
    name: "ICC",
    full: "International Criminal Court",
    agenda: "Prosecuting Crimes Against Humanity in Armed Conflicts",
    desc: "A courtroom simulation where delegates assume the roles of prosecutors, defence counsel, judges, and state representatives to deliberate on issues of international criminal justice and accountability.",
    image: "/assets/committees/icc.jpg",
    hue: "from-amber-900/60 to-forest-deep",
  },
];

function CommitteeCard({ c, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70, filter: "blur(16px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl overflow-hidden glass min-h-[440px] flex flex-col justify-end"
    >
    <img
      src={c.image}
      alt={c.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      loading="lazy"
    />
      <div className={`absolute inset-0 bg-gradient-to-t ${c.hue} via-forest-deep/70 to-transparent`} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.18),transparent_60%)]" />

      <div className="relative z-10 p-7 md:p-9">
        <p className="font-micro uppercase tracking-[0.3em] text-gold-champagne text-[10px] mb-2">{c.full}</p>
        <h3 className="font-display gold-text text-4xl md:text-5xl mb-4">{c.name}</h3>
        <p className="font-body text-parchment/80 text-sm leading-relaxed mb-2">{c.desc}</p>
        <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
          <div className="pt-3 mt-3 border-t border-gold-imperial/25">
            <p className="font-micro uppercase tracking-[0.2em] text-gold-light text-[10px] mb-1">Agenda</p>
            <p className="font-heading italic text-parchment/90 text-sm leading-snug">{c.agenda}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Committees() {
  return (
    <section className="relative min-h-screen w-full flex items-center py-24 md:py-32 overflow-hidden bg-gradient-to-b from-forest-deep via-forest-surface to-forest-deep">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="text-center mb-16">
          <Reveal variant="fade-up">
            <p className="font-micro uppercase tracking-[0.4em] text-gold-champagne/70 text-[11px] mb-4">— The Core Experience</p>
          </Reveal>
          <Reveal variant="blur" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl text-parchment">The <span className="gold-text font-display">Committees</span></h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {COMMITTEES.map((c, i) => (
            <CommitteeCard key={c.name} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}