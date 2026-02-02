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
    title: 'Canada',
    description: 'One of the world\'s most immigrant-friendly nations with excellent quality of life and diverse opportunities',
    image: 'https://picsum.photos/800/600?random=1',
    points: [
      'Express Entry',
      'Provincial Nominee Program',
      'Study Permits',
      'Family Sponsorship',
      'Start-up Visa'
    ],
  },
  {
    id: '2',
    title: 'Portugal',
    description: 'A beautiful country with a strong economy and excellent quality of life, offering a range of immigration pathways.',
    image: 'https://picsum.photos/800/600?random=2',
    points: [
      'Express Entry',
      'Provincial Nominee Program',
      'Study Permits',
      'Family Sponsorship',
      'Start-up Visa'
    ],
    
  },
  {
    id: '3',
    title: 'Switzerland',
    description: 'A highly developed country with a strong economy and excellent quality of life, offering a range of immigration pathways.',
    image: 'https://picsum.photos/800/600?random=3',
    points: [
      'Express Entry',
      'Provincial Nominee Program',
      'Study Permits',
      'Family Sponsorship',
      'Start-up Visa'
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar/>  
      {/* Hero Section */}
      <section className="min-h-screen flex justify-center items-center px-8 text-center bg-ebony text-cream">
        <Reveal width="100%">
          <h1 className="text-5xl font-serif mb-4 uppercase tracking-[0.2em]">Choose Your Destination</h1>
          <p className="opacity-70 font-sans tracking-widest uppercase text-sm">Explore migration opportunities in the world's most desirable countries. We provide expert guidance for each destination.</p>
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

      {/* Services List */}
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.2}>
              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="shrink-0 w-full md:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  />
                </div>
                <div className="grow w-full md:w-1/2">
                  <h3 className="text-4xl font-serif text-ebony mb-4">{service.title}</h3>
                  <p className="text-ebony/70 text-lg mb-6 leading-relaxed">{service.description}</p>
                  <li className=" mb-6 text-ebony/70">
                    {service.points?.map((point, idx) => (
                      <span key={idx} className="block mb-2">{point}</span>
                    ))}
                  </li>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-ebony text-cream border rounded-2xl text-sm uppercase tracking-wide hover:bg-cream hover:text-ebony transition-all duration-300 inline-block"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  );
}