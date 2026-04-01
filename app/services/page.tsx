"use client";
import React from 'react';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { additionalServices } from './servicesData';

import ServiceImage from '../../public/ServiceImages.webp'
import CTA from '../components/CTA';

const services = [
  {
    id: '1',
    gate: 'GATE 24',
    seat: '1A',
    destination: 'GLOBAL TALENT',
    title: 'Work Visa Consultation',
    description: 'Navigate the complex world of work visas with our expert guidance.',
    image: ServiceImage,
    points: ['Skilled Worker Programs', 'Employer Sponsorship Assistance', 'Job Search Support & Resume Optimization', 'Work Permit Application & Processing', 'Credential Assessment & Skill Verification'],
  },
  {
    id: '2',
    gate: 'GATE 12',
    seat: '5C',
    destination: 'ACADEMIC EXCELLENCE',
    title: 'Study Visa Services',
    description: 'Pursue your educational dreams abroad with our comprehensive consultation.',
    image: ServiceImage,    
    points: [
      'University & Course Selection Guidance',
      'Application & Admission Support',
      'Student Visa Application Processingoo',
      'Scholarship & Financial Aid Assistance',
      'Post-Study Work Permit Guidance'
    ],
  },
  {
    id: '3',
    gate: 'GATE 09',
    seat: '8F',
    destination: 'CITIZENSHIP PATH',
    title: 'Permanent Residency',
    description: 'Make your new country your permanent home with expert PR assistance.',
    image: ServiceImage,    
    points: [
      'Express Entry & Points-Based Systems',
      'Provincial Nominee Programs (PNP)',
      'Skilled Migration Visas (189, 190, 491)',
      'Green Card Applications (USA)',
      'Settlement & Integration Support'
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section
        className="min-h-screen flex justify-center items-center px-8 text-center bg-ebony text-cream inset-0 z-0 parallax-bg"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('/JRglobal-Service.webp')` }}
      >
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-[0.2em] text-start">Our Migration Services</h1>
          <p className="font-sans tracking-widest uppercase text-sm text-end">Comprehensive consultation services tailored to make your migration journey smooth, successful, and stress-free.</p>
        </div>
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

      <section className="py-20 px-4 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.2}>
              <div className="flex flex-col lg:flex-row bg-[#121212] rounded-4xl overflow-hidden shadow-2xl relative ">

                {/* LEFT SECTION: IMAGE (The "Window" View) */}
                <div className="lg:w-1/3 relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="fill"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-ebony/40 to-transparent lg:hidden" />
                  {/* Decorative Stamp Overlay */}
                  <div className="absolute top-4 left-4 border-2 border-red-500/60 text-black/60 px-3 py-1 rounded uppercase text-[10px] font-bold rotate-[-15deg] backdrop-blur-sm">
                    Verified Service
                  </div>
                </div>

                {/* MIDDLE SECTION: TICKET DETAILS */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between relative bg-[#121212]">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Destination</p>
                        <h4 className="font-mono text-xl text-ebony">{service.destination}</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Class</p>
                        <h4 className="font-mono text-xl text-ebony">PREMIUM</h4>
                      </div>
                    </div>

                    <h3 className="text-3xl font-serif text-ebony mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed">{service.description}</p>

                    <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                      {service.points.map((point, idx) => (
                        <span key={idx} className="text-[11px] border border-slate-100 font-bold  text-gray-400 px-3 py-1 rounded-full uppercase">
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* THE PERFORATION LINE */}
                <div className="hidden lg:flex flex-col items-center justify-between py-6 relative bg-[#121212]">
                  <div className="w-10 h-10 bg-[#0a0a0a] rounded-full -mt-11 " />
                  <div className="h-full border-r-2 border-dashed border-gray-400" />
                  <div className="w-10 h-10 bg-[#0a0a0a] rounded-full -mb-11 " />
                </div>

                {/* RIGHT SECTION: STUB */}
                <div className="lg:w-64 bg-[#121212] p-8 flex flex-col justify-between ">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Gate</p>
                        <p className="font-mono text-lg">{service.gate}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Seat</p>
                        <p className="font-mono text-lg">{service.seat}</p>
                      </div>
                    </div>

                    {/* Barcode */}
                    <div className="bg-white p-4 border border-slate-200 rounded flex flex-col items-center">
                      <div className="w-full h-10 flex gap-px items-center overflow-hidden">
                        {[...Array(25)].map((_, i) => (
                          <div key={i} className={`bg-slate-800 h-full ${i % 4 === 0 ? 'w-3px' : 'w-px'}`} />
                        ))}
                      </div>
                      <p className="text-[8px] font-mono mt-2 text-slate-400 tracking-widest">#{service.id}00-PASS</p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 block w-full text-center py-4 border border-gray-400 text-cream text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-700 transition-all rounded-xl shadow-2xl shadow-gray-400/10"
                  >
                    Confirm Flight
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-24 px-6 md:px-20 bg-ebony text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <span className="text-sienna uppercase tracking-[0.4em] text-[10px] font-bold">Extended Support</span>
              <h2 className="text-4xl md:text-5xl font-serif">Additional Services</h2>
            </div>
            <p className="max-w-md text-cream/60 text-sm font-light leading-relaxed">
              Beyond the initial application, we provide specialized support for every nuance of your global transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.1}>
                <div className="group relative h-112.5 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                  {/* Background Number */}
                  <div className="absolute top-4 right-8 text-8xl font-serif text-white/20 select-none group-hover:text-sienna/10 transition-colors">
                    0{service.id}
                  </div>
                  
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-sienna/20 flex items-center justify-center mb-8 border border-sienna/30">
                      {service.title.includes("Family") && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sienna">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.title.includes("Business") && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sienna">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.title.includes("Document") && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sienna">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="10 9 9 9 8 9" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-full h-px bg-white/10 mb-6" />
                    {service.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs uppercase tracking-widest text-cream/40 group-hover:text-cream/80 transition-colors">
                        <div className="w-1 h-1 rounded-full bg-sienna" />
                        {point}
                      </div>
                    ))}
                  </div>
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