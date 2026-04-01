"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-40 px-8 md:px-20 bg-ebony text-center relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sienna/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl font-serif text-cream mb-12 leading-tight"
        >
          Your Future Awaits <br /> Beyond Borders
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg font-sans font-light text-cream/60 mb-16 max-w-2xl mx-auto"
        >
          Experience a relocation journey tailored to your lifestyle. Speak with an expert today and begin your path to a new global identity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/contact" className="inline-block">
            <button className="group relative px-10 py-5 bg-sienna text-cream text-[10px] uppercase tracking-[0.4em] font-sans rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(160,82,45,0.3)]">
              <span className="relative z-10">Schedule a Private Consultation</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
