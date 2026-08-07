import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";

const CAMERA_CREW = [
  {
    name: "Darshan Mishra",
    image: "/assets/images/dmr.webp",
  },
  {
    name: "Aakash Roy",
    image: "/assets/images/ary.webp",
  },
  {
    name: "Priyansu Banerjee",
    image: "/assets/images/pb.webp",
  },
  {
    name: "Nairit Mandal",
    image: "/assets/images/nm.webp",
  },
  {
    name: "Sayandeep Das",
    image: "/assets/images/sd.webp",
  },
  {
    name: "Debanta Chalak",
    image: "/assets/images/dc.webp",
  },
  {
    name: "Debashrito Chakraborty",
    image: "/assets/images/dcy.webp",
  },
  {
    name: "Adrija Mandal",
    image: "/assets/images/amp.webp",
  }


];

const ROTATIONS = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];

function PhotoCard({ member, index }) {
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
        y: 60,
        rotate: index % 2 ? 8 : -8,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              rotate: 0,
            }
          : {}
      }
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group ${ROTATIONS[index % ROTATIONS.length]}`}
    >
      <div className="relative bg-[#faf8f2] p-4 pb-8 rounded-sm shadow-2xl transition-all duration-500 group-hover:rotate-0 group-hover:-translate-y-4 group-hover:shadow-[0_30px_80px_rgba(212,175,55,0.25)]">

        {/* Camera focus corners */}

        <span className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-black/50 opacity-0 group-hover:opacity-100 transition" />
        <span className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-black/50 opacity-0 group-hover:opacity-100 transition" />
        <span className="absolute bottom-10 left-3 w-6 h-6 border-l-2 border-b-2 border-black/50 opacity-0 group-hover:opacity-100 transition" />
        <span className="absolute bottom-10 right-3 w-6 h-6 border-r-2 border-b-2 border-black/50 opacity-0 group-hover:opacity-100 transition" />

        <div className="overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="mt-5 text-center">
          <h3 className="font-heading text-xl text-gray-900">
            {member.name}
          </h3>
        </div>

        {/* Flash */}

        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />

      </div>
    </motion.div>
  );
}

export default function CameraCrew() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,.2)_50%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <Reveal variant="fade-up">
            <p className="font-micro uppercase tracking-[0.45em] text-gold-champagne/70 text-[11px] mb-4">
              — Through The Lens —
            </p>
          </Reveal>

          <Reveal variant="blur" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl text-parchment">
              Camera{" "}
              <span className="gold-text font-display">
                Crew
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.2}>
            <p className="mt-6 max-w-3xl mx-auto text-parchment/65 leading-8">
              Every memorable speech, every decisive motion, and every defining
              moment deserves to be remembered. Our Camera Crew captures the
              essence of HSMUN through every frame.
            </p>
          </Reveal>

        </div>

        {/* Polaroid Gallery */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {CAMERA_CREW.map((member, index) => (
            <PhotoCard
              key={member.name}
              member={member}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}