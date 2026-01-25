"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      // Move background slower for depth (adjust multiplier for effect)
      bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 parallax-bg"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://picsum.photos/1920/1080?random=1')` }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <Reveal>
          <motion.h1 
            whileHover={{ scale: 1.02 }}
            className="text-5xl md:text-[5.2rem]  font-serif leading-tight text-cream mb-8 cursor-default transition-transform duration-700"
          >
            Turn Your Migration  Dreams Into Reality
          </motion.h1>
        </Reveal>

       
          <motion.p className="text-xs md:text-sm font-sans uppercase tracking-[0.4em] text-white space-x-4">
            <span>Trusted Migration Experts</span>
            <span className="hidden md:inline">|</span>
            <span>Trusted Migration Experts</span>
            <span className="hidden md:inline">|</span>
            <span>Trusted Migration Experts</span>
          </motion.p>
      
      </div>

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
  );
};

export default Hero;
