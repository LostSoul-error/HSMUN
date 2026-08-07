import React from "react";
import { Instagram, Mail, MapPin, Shield, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-imperial/15">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-surface/30 to-[#03130F]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20">

        <div className="glass-strong rounded-[32px] p-10 md:p-14">

          {/* Logo */}
          <div className="flex flex-col items-center text-center">

            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full glass border border-gold-imperial/20 overflow-hidden flex items-center justify-center shadow-2xl shadow-gold-imperial/10">

              <img
                src="/assets/images/LOGO CENTERED.webp"
                alt="HSMUN Logo"
                className="w-full h-full object-contain"
              />

            </div>

            <h2 className="mt-8 font-display text-5xl gold-text">
              HSMUN 2026
            </h2>

            <p className="mt-3 font-heading italic text-parchment/70">
              Debate with Purpose. Lead with Integrity.
            </p>

            <p className="mt-6 max-w-3xl text-parchment/60 leading-8">
              Hem Sheela Model United Nations is committed to fostering diplomacy,
              critical thinking, and global citizenship by providing students
              with an immersive platform for meaningful debate, collaboration,
              and leadership.
            </p>

          </div>

          {/* Contact */}
          <div className="mt-14 grid md:grid-cols-3 gap-6">

            <a
              href="https://instagram.com/hsmun.official"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 flex items-center justify-center gap-3 hover:border-gold-imperial/40 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-gold-imperial" />
              <span className="text-parchment/75">
                @hsmun.official
              </span>
            </a>

            <a
              href="mailto:hsmundgp@gmail.com"
              className="glass rounded-2xl p-5 flex items-center justify-center gap-3 hover:border-gold-imperial/40 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-gold-imperial" />
              <span className="text-parchment/75">
                hsmundgp@gmail.com
              </span>
            </a>

            <div className="glass rounded-2xl p-5 flex items-center justify-center gap-3">

              <MapPin className="w-5 h-5 text-gold-imperial" />

              <span className="text-parchment/75">
                Hem Sheela Model School, Durgapur
              </span>

            </div>

          </div>

          {/* Divider */}
          {/* <div className="my-12 border-t border-gold-imperial/10" /> */}

          {/* Links
          <div className="flex flex-wrap justify-center gap-8 text-sm">

            <a
              href="/terms"
              className="flex items-center gap-2 text-parchment/55 hover:text-gold-light transition-colors"
            >
              <FileText className="w-4 h-4" />
              Terms of Use
            </a>

            <a
              href="/privacy"
              className="flex items-center gap-2 text-parchment/55 hover:text-gold-light transition-colors"
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </a>

          </div> */}

          {/* Legal */}
          <div className="mt-10 max-w-5xl mx-auto space-y-5 text-center">

            <p className="text-xs leading-7 text-parchment/45">
              HSMUN is an independent educational Model United Nations
              conference. References to the United Nations, governmental
              institutions, international courts, committees, national flags,
              and related emblems are used solely for educational and
              simulation purposes. No official affiliation, endorsement,
              sponsorship, or representation is implied.
            </p>

            <p className="text-xs leading-7 text-parchment/40">
              All photographs, committee materials, graphics, and media are
              intended exclusively for educational, informational, and
              promotional purposes relating to HSMUN. Any third-party
              intellectual property remains the property of its respective
              owners.
            </p>

            <p className="text-xs leading-7 text-parchment/40">
              Designed & Developed by{" "}
              <span className="gold-text font-semibold">
                Rishav
              </span>{" "}
              using modern web technologies and AI-assisted development
              workflows.
            </p>

          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gold-imperial/10 flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-xs uppercase tracking-[0.25em] text-parchment/35">
              © 2026 Hem Sheela Model United Nations
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-parchment/35">
              Pax Per Veritatem
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}