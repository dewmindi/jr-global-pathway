"use client";

import React from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

import JoyWinston from "../../public/JoyWinston.webp";
import KiaraRoy from "../../public/KiaraRoy.webp";
import RoySharan from "../../public/RoySharan.webp";

const team = [
  {
    id: "1",
    name: "Joy Winston",
    role: "Founder & Managing Director",
    image: JoyWinston,
    bio: "Driving organizational growth and long-term client partnerships globally.",
  },
  {
    id: "2",
    name: "Kiara Roy",
    role: "Founder & Director Operations",
    image: KiaraRoy,
    bio: "Overseeing seamless operation workflows and client success management.",
  },
  {
    id: "3",
    name: "Roy Sharan",
    role: "Director / CEO / Founder",
    image: RoySharan,
    bio: "Strategic lead with deep expertise in migration frameworks and ethical consultancy.",
  },
];

export default function TeamPageClient() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen bg-ebony">
        <Navbar />

        <section
          className="min-h-[65vh] flex justify-center items-center px-8 text-center bg-ebony text-cream relative z-10"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('/JRGlobal-Hero2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-sienna uppercase tracking-[0.45em] text-[10px] font-bold">Leadership</span>
            <h1 className="text-4xl md:text-6xl font-serif uppercase tracking-[0.15em]">Meet The Team</h1>
            <p className="font-sans tracking-wider uppercase text-xs md:text-sm opacity-80 leading-relaxed">
              Trusted migration professionals committed to precision, ethics, and long-term client success.
            </p>
          </div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-10 flex flex-col items-center space-y-4"
          >
            <span className="text-[0.6rem] uppercase tracking-[0.5em] text-cream font-sans">Leadership Profiles</span>
            <div className="w-px h-16 relative overflow-hidden bg-cream/20">
              <m.div
                animate={{ y: [0, 64] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 w-full h-1/2 bg-sienna"
              />
            </div>
          </m.div>
        </section>

        <section className="py-32 px-8 md:px-20 bg-cream/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center space-y-4">
              <span className="text-sienna uppercase tracking-[0.4em] text-[10px] font-bold">Our People</span>
              <h2 className="text-5xl md:text-6xl font-serif text-cream">The Foundation</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-500"
                >
                  <div className="relative w-40 h-40 rounded-full overflow-hidden mb-8 border-2 border-sienna/30 group-hover:border-sienna transition-colors duration-500">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-sienna text-[10px] uppercase tracking-widest">{member.role}</span>
                    <h3 className="text-2xl font-serif text-cream">{member.name}</h3>
                    <p className="text-cream/40 text-sm font-light mt-4 line-clamp-3 italic">&quot;{member.bio}&quot;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </LazyMotion>
  );
}
