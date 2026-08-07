import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";
import ParticleCanvas from "@/components/ParticleCanvas";

const OC_MEMBERS = [
  {
    name: "Brihasmita Bhattacharjee",
    image: "/assets/images/bb.webp",
  },
  {
    name: "Aanvi Barnwal",
    image: "/assets/images/abn.webp",
  },
  {
    name: "Adrita Roy",
    image: "/assets/images/ar.webp",
  },
  
  {
    name: "Sachi Sinha",
    image: "/assets/images/ss.webp",
  },
  {
    name: "Annesha Koley",
    image: "/assets/images/ak.webp",
  },
];

function Member({ member, index }) {
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
        y: 40,
        scale: 0.92,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="flex flex-col items-center">
        <div
          className="
            relative
            w-52
            h-52
            rounded-full
            p-[2px]
            bg-gradient-to-br
            from-gold-imperial
            via-gold-champagne/60
            to-gold-imperial
            shadow-[0_0_35px_rgba(212,175,55,0.18)]
            transition-all
            duration-500
            group-hover:shadow-[0_0_60px_rgba(212,175,55,0.35)]
            group-hover:scale-105
          "
        >
          <div className="relative w-full h-full rounded-full overflow-hidden glass">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                bg-[linear-gradient(120deg,transparent_35%,rgba(242,217,141,0.25)_50%,transparent_65%)]
              "
            />
          </div>
        </div>

        <h3 className="font-heading text-xl text-parchment mt-6 text-center">
          {member.name}
        </h3>
      </div>
    </motion.div>
  );
}

export default function OrganisingCommittee() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <ParticleCanvas density={22} />

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[radial-gradient(circle,#D4AF37_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <Reveal variant="fade-up">
            <p className="font-micro uppercase tracking-[0.4em] text-gold-champagne/70 text-[11px] mb-4">
              — Behind the Conference —
            </p>
          </Reveal>

          <Reveal variant="blur" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl text-parchment">
              Organising{" "}
              <span className="gold-text font-display">
                Committee
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.2}>
            <p className="mt-6 max-w-3xl mx-auto text-parchment/65 leading-8">
              Behind every successful conference is a dedicated team working
              tirelessly behind the scenes, ensuring that every session,
              every delegate, and every moment of HSMUN unfolds seamlessly.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-14 items-center">
          <div className="grid md:grid-cols-2 gap-16 w-full max-w-4xl">
            <Member member={OC_MEMBERS[0]} index={0} />
            <Member member={OC_MEMBERS[1]} index={1} />
          </div>

          <div className="relative flex justify-center w-full">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-imperial/25 to-transparent" />

            <div className="relative z-10">
              <Member member={OC_MEMBERS[2]} index={2} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 w-full max-w-4xl">
            <Member member={OC_MEMBERS[3]} index={3} />
            <Member member={OC_MEMBERS[4]} index={4} />
          </div>
        </div>
      </div>
    </section>
  );
}