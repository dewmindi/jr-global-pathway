"use client";
import React from 'react';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const services = [
  {
    id: '1',
    gate: 'GATE 24',
    seat: '1A',
    destination: 'GLOBAL TALENT',
    title: 'Work Visa Consultation',
    description: 'Navigate the complex world of work visas with our expert guidance.',
    image: 'https://picsum.photos/800/600?random=1',
    points: ['Skilled Worker Programs', 'Employer Sponsorship Assistance', 'Job Search Support & Resume Optimization', 'Work Permit Application & Processing', 'Credential Assessment & Skill Verification'],
  },
  {
    id: '2',
    gate: 'GATE 12',
    seat: '5C',
    destination: 'ACADEMIC EXCELLENCE',
    title: 'Study Visa Services',
    description: 'Pursue your educational dreams abroad with our comprehensive consultation.',
    image: 'https://picsum.photos/800/600?random=2',
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
    image: 'https://picsum.photos/800/600?random=3',
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
      
      <section className="min-h-screen flex justify-center items-center px-8 text-center bg-ebony text-cream">
        <Reveal width="100%">
          <h1 className="text-5xl font-serif mb-4 uppercase tracking-[0.2em]">Our Migration Services</h1>
          <p className="opacity-70 font-sans tracking-widest uppercase text-sm">Comprehensive consultation services tailored to make your migration journey smooth, successful, and stress-free.</p>
        </Reveal>
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
              <div className="flex flex-col lg:flex-row bg-[#121212] rounded-[2rem] overflow-hidden shadow-2xl relative ">
                
                {/* LEFT SECTION: IMAGE (The "Window" View) */}
                <div className="lg:w-1/3 relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-ebony/40 to-transparent lg:hidden" />
                  {/* Decorative Stamp Overlay */}
                  <div className="absolute top-4 left-4 border-2 border-white/60 text-white/60 px-3 py-1 rounded uppercase text-[10px] font-bold rotate-[-15deg] backdrop-blur-sm">
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
                      <div className="w-full h-10 flex gap-[2px] items-center overflow-hidden">
                        {[...Array(25)].map((_, i) => (
                          <div key={i} className={`bg-slate-800 h-full ${i % 4 === 0 ? 'w-[3px]' : 'w-[1px]'}`} />
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
      <Footer />
    </main>
  );
}