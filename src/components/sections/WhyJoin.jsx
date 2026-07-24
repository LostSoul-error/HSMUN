// import React, { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import Reveal from "@/components/Reveal";
// import { Users, Building2, Gavel, MessagesSquare } from "lucide-react";

// const STATS = [
//   { icon: Users, value: 500, suffix: "+", label: "Delegates" },
//   { icon: Building2, value: 10, suffix: "+", label: "Schools" },
//   { icon: Gavel, value: 4, suffix: "+", label: "Committees" },
//   { icon: MessagesSquare, value: 100, suffix: "+", label: "Debates" },
// ];

// function Counter({ value, suffix }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });
//   const [n, setN] = useState(0);
//   const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   useEffect(() => {
//     if (!inView) return;
//     if (reduce) { setN(value); return; }
//     let start;
//     let raf;
//     const duration = 1800;
//     const tick = (t) => {
//       if (!start) start = t;
//       const p = Math.min((t - start) / duration, 1);
//       const eased = 1 - Math.pow(1 - p, 3);
//       setN(Math.round(eased * value));
//       if (p < 1) raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [inView, value, reduce]);

//   return (
//     <span ref={ref} className="font-display gold-text text-5xl md:text-6xl">
//       {n}{suffix}
//     </span>
//   );
// }

// export default function WhyJoin() {
//   return (
//     <section className="relative min-h-screen w-full flex items-center py-24 md:py-32 overflow-hidden">
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
//         <div className="text-center mb-20">
//           <Reveal variant="fade-up">
//             <p className="font-micro uppercase tracking-[0.4em] text-gold-champagne/70 text-[11px] mb-4">— By the Numbers</p>
//           </Reveal>
//           <Reveal variant="blur" delay={0.1}>
//             <h2 className="font-heading text-4xl md:text-6xl text-parchment">Why <span className="gold-text font-display">Join</span></h2>
//           </Reveal>
//         </div>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {STATS.map((s, i) => {
//             const Icon = s.icon;
//             return (
//               <motion.div
//                 key={s.label}
//                 initial={{ opacity: 0, y: 50, scale: 0.92 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true, margin: "-10% 0px" }}
//                 transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
//                 className="glass rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold-champagne/60"
//               >
//                 <div className="w-12 h-12 mx-auto rounded-xl glass-strong flex items-center justify-center mb-5">
//                   <Icon className="w-5 h-5 text-gold-imperial" />
//                 </div>
//                 <Counter value={s.value} suffix={s.suffix} />
//                 <p className="font-micro uppercase tracking-[0.25em] text-parchment/60 text-[10px] mt-3">{s.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }