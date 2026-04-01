"use client";
import React from 'react';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AirplaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-3 shrink-0 text-ebony/60 group-hover:text-ebony transition-colors">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1.5-1.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
  </svg>
);

const countries = [
  {
    id: 'australia',
    title: 'Australia',
    description: 'A land of opportunity with a high standard of living, vibrant cities, and a robust economy seeking skilled professionals.',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200',
    programs: [
      'Skilled Migration (189, 190, 491)',
      'Employer Sponsorship',
      'Student Visas',
      'Business Innovation',
      'Partner Visas'
    ],
    highlights: [
      'Excellent Weather',
      'High Wages',
      'World-Class Education'
    ]
  },
  {
    id: 'new-zealand',
    title: 'New Zealand',
    description: 'Famed for its stunning landscapes and high quality of life, New Zealand offers a safe, peaceful environment with great career prospects.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200',
    programs: [
      'Skilled Migrant Category',
      'Work to Residence',
      'Student Visas',
      'Entrepreneur Work Visa',
      'Partnership Visas'
    ],
    highlights: [
      'Beautiful Nature',
      'Safe Environment',
      'Quality Education',
      'Outdoor Lifestyle'
    ]
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

      {/* Countries List */}
      <section className="py-32 px-8 md:px-20 bg-cream/30">
        <div className="max-w-7xl mx-auto space-y-32">
          {countries.map((country, index) => (
            <Reveal key={country.id} delay={index * 0.2}>
              <div className={`flex flex-col md:flex-row gap-12 items-stretch ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative overflow-hidden group rounded-3xl h-125">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={country.image}
                    alt={country.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-ebony/20 group-hover:bg-ebony/10 transition-colors duration-500" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center py-6">
                  <span className="text-xs uppercase tracking-[0.4em] text-ebony/50 mb-3 block">Destination</span>
                  <h3 className="text-5xl md:text-6xl font-serif text-ebony mb-8">{country.title}</h3>
                  <p className="text-ebony/80 text-xl font-light mb-10 leading-relaxed max-w-xl">
                    {country.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    {/* Popular Programs */}
                    <div className="space-y-4">
                      <h4 className="text-sm uppercase tracking-widest font-semibold text-ebony border-b border-ebony/10 pb-2">
                        Popular Programs
                      </h4>
                      <ul className="space-y-3">
                        {country.programs.map((program, idx) => (
                          <li key={idx} className="flex items-start group">
                            <AirplaneIcon />
                            <span className="text-ebony/70 group-hover:text-ebony transition-colors text-sm font-medium">{program}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-4">
                      <h4 className="text-sm uppercase tracking-widest font-semibold text-ebony border-b border-ebony/10 pb-2">
                        Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {country.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mr-3 shrink-0 text-ebony/40 group-hover:text-ebony transition-colors">
                              <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-ebony/70 group-hover:text-ebony transition-colors text-sm font-medium">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ebony text-cream rounded-full text-sm uppercase tracking-widest hover:bg-ebony/90 transition-all duration-300 w-fit"
                  >
                    Start Your Path
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
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