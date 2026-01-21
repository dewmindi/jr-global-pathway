"use client";
import React from 'react';

import { Reveal } from './Reveal';
import { SERVICES } from '@/constants';

const Services: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-20 bg-ebony text-cream">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-xs uppercase tracking-[0.5em] font-sans mb-4 opacity-60">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-serif mb-20">Curated Relocation Programs</h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className={`group ${index === 0 ? 'md:col-span-5' : index === 1 ? 'md:col-span-7 pt-20' : 'md:col-span-12 md:flex md:space-x-12 items-end mt-20'}`}
            >
              <Reveal delay={index * 0.2}>
                <div className="relative overflow-hidden mb-8 aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest font-sans border-t border-cream/20 pt-4">
                      <span>Timeline: {service.metadata.processTime}</span>
                      <span>Success: {service.metadata.successRate}</span>
                    </div>
                  </div>
                </div>
                <div className={`${index === 2 ? 'md:max-w-xl' : ''}`}>
                  <h4 className="text-3xl font-serif mb-4">{service.title}</h4>
                  <p className="font-sans text-cream/60 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-[10px] uppercase tracking-[0.3em] font-sans border-b border-cream/20 pb-2 hover:border-sienna transition-colors duration-300">
                    Explore Program
                  </button>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
