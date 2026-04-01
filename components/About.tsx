"use client";
import React from 'react';
import Link from 'next/link';
import { Reveal } from './Reveal';


const About: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <div className="relative overflow-hidden group">
            <img 
              src="/JRGlobal-images1.jpg" 
              alt="Luxury Office" 
              className="w-full h-auto rounded-xl hover:grayscale-0 transition-all duration-1000 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Reveal>

        <div className="space-y-12">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif text-ebony leading-tight">
              Specialists in Australia &  <br /> New Zealand Immigration
            </h2>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-lg font-sans font-light leading-relaxed text-ebony/70">
              JR Global Pathways provides comprehensive immigration assistance across all major visa categories, appeals, and complex migration matters.
               We support individuals, families, students, and employers with reliable, ethical, and results-driven guidance.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <Link href="/about" className="px-10 py-4 border-[0.5px] border-ebony text-xs uppercase tracking-[0.2em] font-sans hover:bg-ebony hover:text-cream transition-all duration-500 inline-block">
              Discover Our Story
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
