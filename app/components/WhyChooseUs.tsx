"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';
import { WHY_CHOOSE_US } from '@/constants';

const WhyChooseUs: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  return (
    <section ref={containerRef} className="py-32 px-8 md:px-20 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-20">
        <Reveal>
          <h2 className="text-xs uppercase tracking-[0.5em] font-sans mb-4 opacity-60 text-ebony">Why Choose Us</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-ebony">Unparalleled Excellence</h3>
        </Reveal>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          ref={scrollRef}
          style={{ x }}
          className="flex gap-12 md:gap-20"
        >
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-full md:w-96"
            >
              <div className="group h-full">
                <div className="relative overflow-hidden mb-8 aspect-[4/3] rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ebony/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-serif text-ebony group-hover:text-sienna transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="font-sans text-ebony/60 font-light leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-widest font-sans text-ebony/50">
                    <span>{item.metric}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em] font-sans text-ebony/50">
          Scroll down to explore our advantages
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;

