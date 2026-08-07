import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Secretariat from "@/components/sections/Secretariat";
import ExecutiveBoard from "@/components/sections/ExecutiveBoard";
import InternationalPress from "@/components/sections/InternationalPress";
import Committees from "@/components/sections/Committees";
import OrganisingCommittee from "@/components/sections/OrganisingCommittee";
import AgendaShowcase from "@/components/sections/AgendaShowcase";
import CameraCrew from "@/components/sections/CameraCrew";
import EditorTeam from "@/components/sections/EditorTeam";
// import WhyJoin from "@/components/sections/WhyJoin";
import RegistrationCTA from "@/components/sections/RegistrationCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-forest-deep">
      {/* ambient world-map / gradient background across entire page */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#0B241D_0%,#061A14_60%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.025] bg-[radial-gradient(circle_at_1px_1px,#D4AF37_1px,transparent_0)] [background-size:42px_42px]" />

      <Hero />
      <About />
      <Secretariat />
      <ExecutiveBoard />
      <InternationalPress />
      <OrganisingCommittee />
      <CameraCrew />
      <EditorTeam />
      <Committees />
      <AgendaShowcase />

      {/* <WhyJoin /> */}
      <RegistrationCTA />
      <Footer />
    </main>
  );
}