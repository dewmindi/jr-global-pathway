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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div className="group">
                <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover  brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest font-sans border-t border-cream/20 pt-3">
                      <span>{service.metadata.processTime}</span>
                      <span>{service.metadata.successRate}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-3">{service.title}</h4>
                  <p className="font-sans text-cream/60 font-light leading-relaxed text-sm mb-5">
                    {service.description}
                  </p>
                  <button className="text-[10px] uppercase tracking-[0.3em] font-sans border-b border-cream/20 pb-2 hover:border-sienna transition-colors duration-300">
                    Explore Program
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
