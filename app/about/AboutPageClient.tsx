"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

export default function AboutPageClient() {
    return (
        <LazyMotion features={domAnimation}>
            <main className="min-h-screen bg-ebony">
                <Navbar />

                <section
                    className="min-h-screen flex justify-center items-center px-8 text-center bg-ebony text-cream relative z-10"
                   
                >
                    <Image
                        src="/JRGlobal-Hero2.webp"
                        alt="Hero"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto z-10">
                        <h1 className="text-4xl md:text-6xl font-serif mb-6 uppercase tracking-[0.2em] text-start md:w-1/2">
                            About JR Global Pathways
                        </h1>
                        <p className="font-sans tracking-widest uppercase text-sm text-end md:w-1/2 opacity-80 leading-relaxed">
                            We design tailored relocation programs for discerning individuals and families
                            - combining legal precision, bespoke planning and lifelong support.
                        </p>
                    </div>

                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 flex flex-col items-center space-y-4 cursor-pointer"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                    >
                        <span className="text-[0.6rem] uppercase tracking-[0.5em] text-cream font-sans">
                            Scroll To Explore
                        </span>
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative group overflow-hidden rounded-3xl h-[600px]">
                                <m.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8 }}
                                    src="/JRGlobal-images6.jpg"
                                    alt="Our story"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-ebony/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <span className="text-sienna uppercase tracking-[0.4em] text-[10px] font-bold">
                                        The Journey
                                    </span>
                                    <h2 className="text-5xl md:text-6xl font-serif text-cream leading-tight">Our Story</h2>
                                </div>

                                <div className="space-y-6 text-lg font-light text-cream/70 leading-relaxed">
                                    <p>
                                        JR Global Pathways is a dedicated migration consultancy focused on providing strategic, ethical,
                                        and client-centered immigration solutions for Australia and New Zealand.
                                    </p>
                                    <p>
                                        Our practice is built on accuracy, compliance, and transparency. We approach every case with diligence, discretion, and a commitment to achieving the best possible outcome.
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                                    <h4 className="text-sienna text-xs uppercase tracking-widest mb-4">The Approach</h4>
                                    <p className="text-cream/60 leading-relaxed">
                                        Every engagement begins with detailed analysis. We identify appropriate pathways, assess risks, and develop structured strategies to maximize approval prospects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-8 md:px-20 bg-ebony">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                            <div className="space-y-4">
                                <span className="text-sienna uppercase tracking-[0.4em] text-[10px] font-bold">Philosophy</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-cream">Our Core Purpose</h2>
                            </div>
                            <p className="max-w-md text-cream/40 text-sm font-light leading-relaxed">
                                Guided by precision and ethical practice, we aim to redefine the migration architectural experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group relative h-100 bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-between hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-4 right-8 text-8xl font-serif text-white/3 select-none group-hover:text-sienna/10 transition-colors">01</div>
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-sienna/20 flex items-center justify-center mb-8 border border-sienna/30">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sienna">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-serif text-cream mb-4">Vision</h3>
                                    <p className="text-cream/60 text-base font-light leading-relaxed">
                                        To become a trusted migration advisory firm recognized for excellence in client service, ethical practice, and successful outcomes across Australia and New Zealand.
                                    </p>
                                </div>
                                <div className="w-full h-px bg-white/10" />
                            </div>

                            <div className="group relative h-100 bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-between hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-4 right-8 text-8xl font-serif text-white/3 select-none group-hover:text-sienna/10 transition-colors">02</div>
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-sienna/20 flex items-center justify-center mb-8 border border-sienna/30">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sienna">
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-serif text-cream mb-4">Mission</h3>
                                    <p className="text-cream/60 text-base font-light leading-relaxed">
                                        To deliver reliable and professional migration services that simplify complex immigration processes while maintaining the highest standards of integrity.
                                    </p>
                                </div>
                                <div className="w-full h-px bg-white/10" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-8 md:px-20 bg-ebony">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                            <div className="space-y-4">
                                <span className="text-sienna uppercase tracking-[0.4em] text-[10px] font-bold">
                                    Standard of Excellence
                                </span>
                                <h2 className="text-4xl md:text-5xl font-serif text-cream">Core Values</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Integrity", body: "Absolute discretion and honest counsel.", id: "01" },
                                { title: "Excellence", body: "Best-in-class service and attention to detail.", id: "02" },
                                { title: "Craftsmanship", body: "Tailored solutions for unique circumstances.", id: "03" },
                                { title: "Partnership", body: "Long-term support beyond approvals.", id: "04" },
                            ].map((v) => (
                                <div
                                    key={v.title}
                                    className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 h-[250px] flex flex-col justify-between hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="text-sienna/20 font-serif text-3xl group-hover:text-sienna/50 transition-colors">{v.id}</div>
                                    <div>
                                        <h4 className="text-xl font-serif text-cream mb-2">{v.title}</h4>
                                        <p className="text-cream/50 text-sm font-light leading-relaxed">{v.body}</p>
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
