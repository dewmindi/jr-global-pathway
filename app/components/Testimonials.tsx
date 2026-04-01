
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TESTIMONIALS } from '@/constants';

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="relative py-40 px-8 md:px-20 overflow-hidden bg-ebony">
      {/* Cinematic Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 opacity-30"
      >
        <div 
          className="w-full h-[120%] bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')` }}
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-ebony via-ebony/80 to-ebony z-1" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-24 text-center space-y-4">
          <span className="text-sienna uppercase tracking-[0.4em] text-[10px] font-bold block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-serif text-cream">Client Stories</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[500px] bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-between hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* background quotes */}
              <div className="absolute top-4 right-8 text-8xl font-serif text-white/[0.03] select-none group-hover:text-sienna/10 transition-colors">
                “
              </div>

              <div className="space-y-8">
                <div className="w-12 h-12 rounded-2xl bg-sienna/20 flex items-center justify-center border border-sienna/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sienna">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <p className="text-lg font-light leading-relaxed text-cream/70 italic group-hover:text-cream transition-colors duration-500">
                  {t.text}
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-full h-px bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-xl font-serif text-cream">{t.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-sienna font-bold mt-2">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

