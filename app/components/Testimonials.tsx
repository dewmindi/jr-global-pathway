
import React from 'react';

import { Reveal } from './Reveal';
import { TESTIMONIALS } from '@/constants';

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-32 px-8 md:px-20 overflow-hidden">
      {/* Cinematic Background Image for Testimonials */}
      <div 
        className="absolute inset-0 z-0 parallax-bg"
        style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=10')` }}
      />
      <div className="absolute inset-0 bg-ebony/60 z-1" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-center text-xs uppercase tracking-[0.5em] font-sans text-cream/60 mb-20">Client Stories</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={t.id} delay={index * 0.2}>
              <div className="glass p-10 h-full flex flex-col justify-between group hover:border-cream/40 transition-all duration-500">
                <div className="mb-12">
                  <div className="text-cream/30 text-6xl font-serif mb-4 group-hover:text-sienna transition-colors duration-500">“</div>
                  <p className="text-lg font-sans font-light leading-relaxed text-cream/80 italic">
                    {t.text}
                  </p>
                </div>
                <div className="border-t border-cream/10 pt-6">
                  <p className="text-cream font-serif text-xl">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-cream/40 mt-1">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
