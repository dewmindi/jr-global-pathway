"use client";
import React from 'react';

import { Reveal } from './Reveal';
import { DESTINATIONS } from '@/constants';

const Destinations: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-20 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <Reveal>
            <h2 className="text-xs uppercase tracking-[0.5em] font-sans mb-4 opacity-60">Global Reach</h2>
            <h3 className="text-4xl md:text-6xl font-serif">Popular Destinations</h3>
          </Reveal>
          <Reveal delay={0.3}>
            <button className="px-10 py-4 border-[0.5px] border-ebony text-xs uppercase tracking-[0.2em] font-sans hover:bg-ebony hover:text-cream transition-all duration-500">
              View All Locations
            </button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] md:auto-rows-[400px] gap-6">
          {DESTINATIONS.map((dest, index) => (
            <Reveal key={dest.id} width="100%" delay={index * 0.1}>
              <div className={`relative h-full overflow-hidden group ${dest.span || ''}`}>
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ebony/20 group-hover:bg-ebony/40 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
                  <h4 className="text-2xl font-serif text-cream mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {dest.name}
                  </h4>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-cream/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-4 border-t border-cream/20">
                    <span>{dest.visaType}</span>
                    <span>{dest.priceRange}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
