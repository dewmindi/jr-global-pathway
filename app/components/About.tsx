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
              src="https://picsum.photos/800/1000?random=5" 
              alt="Luxury Office" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Reveal>

        <div className="space-y-12">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif text-ebony leading-tight">
              A Legacy of Precision <br /> and Global Freedom
            </h2>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-lg font-sans font-light leading-relaxed text-ebony/70">
              Founded on the principles of discretion and unparalleled expertise, Elysian Migration simplifies the complexities of global relocation. We don't just process applications; we curate life-changing transitions for those who demand the finest the world has to offer.
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
