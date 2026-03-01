"use client";
import React from 'react';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AirplaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 shrink-0">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1.5-1.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
  </svg>
);

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
      <Navbar />
      {/* Hero Section */}
      <section
        className="min-h-screen flex justify-center items-center px-8 text-center bg-ebony text-cream inset-0 z-0 parallax-bg"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('/JRglobal-Countries.jpg')` }}
      >
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-[0.2em] text-start">Choose Your Destination</h1>
          <p className=" font-sans tracking-widest uppercase text-sm text-end">Explore migration opportunities in the world's most desirable countries. We provide expert guidance for each destination.</p>
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
                  <ul className=" mb-6 text-ebony/70 space-y-2">
                    {service.points?.map((point, idx) => (
                      <li key={idx} className="flex items-center">
                        <AirplaneIcon />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
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
      <Footer />
    </main>
  );
}