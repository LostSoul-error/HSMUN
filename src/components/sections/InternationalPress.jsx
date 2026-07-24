import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";
import { Camera, Mic, Newspaper, PenTool } from "lucide-react";

const PRESS = [
  {
    icon: Newspaper,
    title: "Committee Reports",
    desc: "Preparing comprehensive reports that summarize debates, key developments, and committee outcomes with accuracy and impartiality."
  },
  {
    icon: PenTool,
    title: "Fact-Checking",
    desc: "Verifying the accuracy of delegates' statements, statistics, and policy claims to promote informed and evidence-based debate."
  },
  {
    icon: Mic,
    title: "Press Rounds",
    desc: "Questioning delegates through rigorous press interactions that assess policy knowledge, consistency, and diplomatic reasoning."
  },
  {
    icon: Camera,
    title: "Conference Coverage",
    desc: "Documenting committee proceedings and memorable conference moments through photographs and media updates."
  },
];
const IP_MEMBERS = [
  {
    name: "Member Name",
    role: "International Press — AIPPM",
    image: "\\assets\\images\\test.jpg",
  },
  {
    name: "Member Name",
    role: "International Press — AIPPM",
    image: "\\assets\\images\\test.jpg",
  },
  {
    name: "Member Name",
    role: "International Press — DISEC",
    image: "\\assets\\images\\test.jpg",
  },
  {
    name: "Member Name",
    role: "International Press — DISEC",
    image: "\\assets\\images\\test.jpg",
  },
  {
    name: "Member Name",
    role: "International Press — ICC",
    image: "\\assets\\images\\test.jpg",
  },
  {
    name: "Member Name",
    role: "International Press — ICC",
    image: "\\assets\\images\\test.jpg",
  },
];

function MemberCard({ member, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="glass rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">

        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </div>

        <div className="p-5">
          <h3 className="font-heading text-xl text-parchment">
            {member.name}
          </h3>

          <p className="text-gold-light text-sm mt-1">
            {member.role}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

function PressCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const Icon = item.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: index % 2 ? 2 : -2 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="glass rounded-2xl p-8 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[0.5deg] group-hover:border-gold-champagne/60">
        <div className="relative mb-5">
          <div className="w-14 h-14 rounded-xl glass-strong flex items-center justify-center">
            <Icon className="w-6 h-6 text-gold-imperial" />
          </div>
        </div>
        <h3 className="font-heading text-2xl text-parchment mb-2">{item.title}</h3>
        <p className="font-body text-parchment/65 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function InternationalPress() {
  return (
    <section className="relative min-h-screen w-full flex items-center py-24 md:py-32 overflow-hidden">
      {/* paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,#D4AF37_3px,#D4AF37_4px)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="text-center mb-16">
          <Reveal variant="fade-up">
            <p className="font-micro uppercase tracking-[0.4em] text-gold-champagne/70 text-[11px] mb-4">— The Fourth Estate —</p>
          </Reveal>
          <Reveal variant="blur" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl text-parchment">International <span className="gold-text font-display">Press</span></h2>
          </Reveal>
          <Reveal variant="fade" delay={0.2}>
            <p className="font-heading italic text-parchment/60 text-lg mt-4">Every word recorded. Every voice immortalised.</p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRESS.map((p, i) => (
            <PressCard key={p.title} item={p} index={i} />
          ))}
        </div>
        <div className="mt-24">

  <Reveal variant="fade-up">
    <h3 className="font-heading text-3xl md:text-4xl text-center text-parchment mb-3">
      Meet the <span className="gold-text">Press Corps</span>
    </h3>
  </Reveal>

  <Reveal variant="fade">
    <p className="text-center text-parchment/60 max-w-2xl mx-auto mb-12">
Every committee needs more than skilled diplomats—it needs scrutiny. The International Press Corps keeps debate accountable through meticulous fact-checking, incisive questioning, and dynamic press rounds while preserving the story of every committee session.
    </p>
  </Reveal>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {IP_MEMBERS.map((member, index) => (
      <MemberCard
        key={member.name}
        member={member}
        index={index}
      />
    ))}
  </div>

</div>
      </div>
    </section>
  );
}