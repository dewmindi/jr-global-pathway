"use client";
import React, { useEffect, useRef } from 'react';
import { Reveal } from '../components/Reveal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

import JoyWinston from '../../public/JoyWinston.webp'
import KiaraRoy from '../../public/KiaraRoy.webp'
import RoySharan from '../../public/RoySharan.webp'
import CTA from '../components/CTA';

const team = [
    { id: '1', name: 'Roy Sharan', role: 'Director / CEO / Founder', image: RoySharan },
    { id: '2', name: 'Kiara Roy', role: 'Founder & Director Operations ', image: KiaraRoy },
    { id: '3', name: 'Joy Winston ', role: 'Founder & Managing director', image: JoyWinston },
];

export const dynamic = "force-static";


export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            {/* Hero */}
            <section
                className="min-h-screen flex justify-center items-center px-8 text-center bg-ebony text-cream bsolute inset-0 z-0 parallax-bg"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/JRglobal-Hero2.webp')` }}
            >
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-[0.2em] text-start">About JR Global Pathway</h1>
                    <p className=" font-sans tracking-widest uppercase text-sm text-end">We design tailored relocation programs for discerning individuals and families — combining legal precision, bespoke planning and lifelong support.</p>
                </div>
                {/* <Reveal width="100%">
                    <h1 className="text-5xl font-serif mb-4 uppercase tracking-[0.2em]">About JR Global Pathway</h1>
                    <p className="opacity-70 font-sans tracking-widest uppercase text-sm">We design tailored relocation programs for discerning individuals and families — combining legal precision, bespoke planning and lifelong support.</p>
                </Reveal> */}
                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 flex flex-col items-center space-y-4 cursor-pointer"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <span className="text-[0.6rem] uppercase tracking-[0.5em] text-cream font-sans">Scroll To Explore</span>
                    <div className="w-px h-16  relative overflow-hidden bg-black">
                        <motion.div
                            animate={{ y: [0, 64] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="absolute top-0 w-full h-1/2 bg-white"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Our Story */}
            <section className="py-32 px-8 md:px-20 bg-cream">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <Reveal>
                        <div className="relative overflow-hidden group rounded-2xl">
                            <img
                                src="/JRGlobal-images6.jpg"
                                alt="Our story"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out transform group-hover:scale-105 rounded-2xl"
                            />
                        </div>
                    </Reveal>

                    <div className="space-y-8">
                        <Reveal>
                            <h2 className="text-4xl md:text-5xl font-serif text-ebony leading-tight">Our Story</h2>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-lg font-sans text-ebony/70 leading-relaxed">
                                JR Global Pathways is a dedicated migration consultancy focused on providing strategic, ethical,
                                and client-centered immigration solutions for Australia and New Zealand. We assist individuals, families,
                                skilled professionals, and employers in navigating complex immigration frameworks with clarity and confidence.
                            </p>
                            <p>
                                Our practice is built on accuracy, compliance, and transparency. We understand that migration decisions are life-changing,
                                and we approach every case with diligence, discretion, and a commitment to achieving the best possible outcome.

                            </p>
                        </Reveal>

                        <div className="mt-6">
                            <Reveal delay={0.5}>
                                <div className="bg-white/6 backdrop-blur-lg border border-cream/10 rounded-2xl p-6">
                                    <h4 className="text-sm uppercase tracking-widest text-cream/80">Approach</h4>
                                    <p className="mt-2 text-ebony/70">
                                        Every client engagement begins with a detailed consultation and case analysis. We identify the most
                                        appropriate visa pathway, assess potential risks, and develop a structured strategy tailored to the client's circumstances.
                                        Our objective is to reduce uncertainty, minimize processing risks, and maximize approval prospects.

                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-28 px-8 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <h3 className="text-xs uppercase tracking-[0.4em] font-sans mb-6 opacity-60 text-ebony">Philosophy</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/6 backdrop-blur-xl border border-cream/10 rounded-2xl p-10 h-full flex flex-col justify-between">
                                <div>
                                    <h4 className="text-2xl font-serif text-ebony mb-3">Vision</h4>
                                    <p className="text-ebony/70 leading-relaxed">
                                        To become a trusted migration advisory firm recognized for excellence in client service, ethical practice, and
                                        successful outcomes across Australia and New Zealand.
                                    </p>
                                </div>
                                <div className="mt-6 text-sm uppercase tracking-[0.3em] text-cream/70">Long-term guidance</div>
                            </div>

                            <div className="bg-white/6 backdrop-blur-xl border border-cream/10 rounded-2xl p-10 h-full flex flex-col justify-between">
                                <div>
                                    <h4 className="text-2xl font-serif text-ebony mb-3">Mission</h4>
                                    <p className="text-ebony/70 leading-relaxed">
                                        To deliver reliable and professional migration services that simplify complex immigration processes while maintaining
                                        the highest standards of integrity and regulatory compliance.
                                    </p>
                                </div>
                                <div className="mt-6 text-sm uppercase tracking-[0.3em] text-cream/70">Privacy & precision</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Team */}
            <section className="py-32 px-8 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <h3 className="text-xs uppercase tracking-[0.4em] font-sans mb-6 opacity-60 text-ebony">The Team</h3>
                        <h2 className="text-4xl md:text-5xl font-serif text-ebony mb-10">People behind the process</h2>
                    </Reveal>

                    <div className="flex flex-wrap items-center justify-center gap-8 ">
                        {team.map((m, i) => (
                            <Reveal key={m.id} delay={i * 0.1}>
                                <div className="bg-white/6 backdrop-blur-md border border-cream/10 rounded-2xl p-6 flex flex-col items-center text-center">
                                    <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4">
                                        <Image src={m.image} alt={m.name} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="text-cream text-sm uppercase tracking-[0.2em] mb-2">{m.role}</div>
                                    <div className="text-ebony font-serif text-lg">{m.name}</div>
                                    {/* <p className="text-ebony/70 text-sm mt-3">Trusted advisor with deep experience in cross-border planning.</p> */}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-8 md:px-20 bg-cream">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-xs uppercase tracking-[0.4em] font-sans mb-6 opacity-60 text-ebony">Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { title: 'Integrity', body: 'Absolute discretion and honest counsel.' },
                            { title: 'Excellence', body: 'Best-in-class service and attention to detail.' },
                            { title: 'Craftsmanship', body: 'Tailored solutions for unique circumstances.' },
                            { title: 'Partnership', body: 'Long-term support beyond approvals.' },
                        ].map((v, i) => (
                            <Reveal key={v.title} delay={i * 0.2}>
                                <div className="bg-white/6 backdrop-blur-md border border-cream/10 rounded-2xl p-8 h-full flex flex-col justify-between">
                                    <h4 className="text-lg font-serif text-ebony mb-2">{v.title}</h4>
                                    <p className="text-ebony/70 text-sm">{v.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
            <Footer />

        </main>
    );
}
