import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";
import ParticleCanvas from "@/components/ParticleCanvas";

const CHIEF_EDITOR = {
  name: "Aritra Roy",
  role: "Chief Video Editor",
  image: "/assets/images/dada.webp",
};

const EDITORS = [
  {
    name: "Ankit",
    image: "/assets/images/am.webp",
    // image: "https://res.cloudinary.com/l3c1ady9/image/upload/v1786088795/sg2_rs7hgd.webp",
  },
  {
    name: "Rebanta",
    image: "/assets/images/rb.webp",
  },
  {
    name: "Onkar",
    image: "/assets/images/og.webp",
  },
    {
    name: "Rishav",
    image: "/assets/images/sg2.webp",
  },
];

function ChiefEditorCard() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="glass rounded-3xl overflow-hidden max-w-4xl mx-auto transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_80px_rgba(212,175,55,0.25)]">

        <div className="grid lg:grid-cols-2">

          <div className="relative aspect-[4/5] lg:aspect-auto overflow-hidden">
            <img
              src={CHIEF_EDITOR.image}
              alt={CHIEF_EDITOR.name}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col justify-center p-10">

            <p className="font-micro uppercase tracking-[0.35em] text-gold-champagne text-xs mb-4">
              Chief Video Editor
            </p>

            <h3 className="font-heading text-4xl md:text-5xl text-parchment mb-6">
              {CHIEF_EDITOR.name}
            </h3>

            <p className="text-parchment/65 leading-8">
              An alumnus of Hem Sheela Model School whose creativity and dedication continue to shape HSMUN. Through countless hours of editing and post-production, he transforms moments from the conference into lasting memories that preserve its spirit and legacy.
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

function EditorCard({ editor, index }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: index * 0.12,
      }}
      className={`group ${index === 1 ? "lg:-mt-6" : "lg:mt-8"}`}
    >
      <div className="glass rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_25px_70px_rgba(212,175,55,0.18)]">

        <div className="relative aspect-square overflow-hidden">

          <img
            src={editor.image}
            alt={editor.name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        </div>

        <div className="p-6 text-center">

          <h3 className="font-heading text-2xl text-parchment">
            {editor.name}
          </h3>

          <p className="text-gold-light text-sm mt-2">
            Editing Team
          </p>

        </div>

      </div>
    </motion.div>
  );
}
export default function EditorTeam() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">

      <ParticleCanvas density={22} />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <Reveal variant="fade-up">
            <p className="font-micro uppercase tracking-[0.45em] text-gold-champagne/70 text-[11px] mb-4">
              — Behind Every Frame —
            </p>
          </Reveal>

          <Reveal variant="blur" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl text-parchment">
              Editorial{" "}
              <span className="gold-text font-display">
                Team
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.2}>
            <p className="mt-6 max-w-3xl mx-auto text-parchment/65 leading-8">
              Every highlight reel, promotional film, social media post and
              cinematic recap begins here. Our Editorial Team transforms
              thousands of captured moments into stories that preserve the
              spirit of HSMUN.
            </p>
          </Reveal>

        </div>

        {/* Chief Editor */}

        <ChiefEditorCard />

        {/* Editors */}

        <div className="mt-24">

          <Reveal variant="fade-up">
            <h3 className="text-center font-heading text-3xl md:text-4xl text-parchment mb-3">
              Graphics &{" "}
              <span className="gold-text">
                Video Editors
              </span>
            </h3>
          </Reveal>

          <Reveal variant="fade">
            <p className="text-center text-parchment/60 max-w-2xl mx-auto mb-14">
              Working alongside the Chief Video Editor, they shape every visual
              story, crafting content that reflects the professionalism,
              prestige and legacy of HSMUN.
            </p>
          </Reveal>
        
        {/* First Row */}
          <div className="grid md:grid-cols-3 gap-10 items-start">

            <EditorCard
              editor={EDITORS[0]}
              index={0}
            />

            <EditorCard
              editor={EDITORS[1]}
              index={1}
            />

            <EditorCard
              editor={EDITORS[2]}
              index={2}
            />
        </div>

                {/* Second Row */}
        <div className="flex justify-center mt-10">

            <div className="w-full max-w-sm">
            <EditorCard editor={EDITORS[3]} index={3} />
            </div>

        </div>


     </div> {/* mt-24 */}

  </div> {/* max-w-7xl */}

</section>

);
}