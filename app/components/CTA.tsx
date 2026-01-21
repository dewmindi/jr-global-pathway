"use client";
import React from 'react';
import { Reveal } from './Reveal';

const CTA: React.FC = () => {
  return (
    <section className="py-40 px-8 md:px-20 bg-cream text-center">
      <div className="max-w-4xl mx-auto">
        <Reveal width="100%">
          <h2 className="text-4xl md:text-7xl font-serif text-ebony mb-12">
            Your Future Awaits <br /> Beyond Borders
          </h2>
        </Reveal>
        
        <Reveal delay={0.3} width="100%">
          <p className="text-lg font-sans font-light text-ebony/60 mb-16 max-w-2xl mx-auto">
            Experience a relocation journey tailored to your lifestyle. Speak with an expert today and begin your path to a new global identity.
          </p>
        </Reveal>

        <Reveal delay={0.5} width="100%">
          <button className="px-16 py-5 border-[0.5px] border-ebony text-xs uppercase tracking-[0.3em] font-sans hover:bg-ebony hover:text-cream transition-all duration-500">
            Schedule a Private Consultation
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
