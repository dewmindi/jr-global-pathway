"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';
import { WHY_CHOOSE_US } from '@/constants';

const WhyChooseUs: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const [dynamicHeight, setDynamicHeight] = useState<number | 'auto'>('auto');
  const [transformX, setTransformX] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, transformX]);

  useEffect(() => {
    const calculateDimensions = () => {
      if (scrollRef.current && stickyRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const stickyElement = stickyRef.current;
        const style = window.getComputedStyle(stickyElement);
        const paddingLeft = parseFloat(style.paddingLeft);
        const paddingRight = parseFloat(style.paddingRight);

        const containerWidth = stickyElement.offsetWidth;

        const horizontalScrollAmount = scrollWidth - containerWidth + paddingLeft + paddingRight;

        setTransformX(-horizontalScrollAmount);
        setDynamicHeight(horizontalScrollAmount + window.innerHeight);
      }
    };

    calculateDimensions();

    window.addEventListener('resize', calculateDimensions);
    return () => {
      window.removeEventListener('resize', calculateDimensions);
    };
  }, []);

  return (
    <section ref={containerRef} style={{ height: dynamicHeight }} className="relative bg-ebony">
      <div ref={stickyRef} className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-32 px-8 md:px-20">
        <div className="mb-16">
          <span className="text-sienna uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Why Choose Us</span>
          <h3 className="text-4xl md:text-6xl font-serif text-cream">Unparalleled Excellence</h3>
        </div>

        <motion.div
          ref={scrollRef}
          style={{ x }}
          className="flex gap-8"
        >
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="shrink-0 w-[400px]"
            >
              <div className="group relative h-[350px] bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-between hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                {/* Background Number */}
                <div className="absolute top-4 right-8 text-7xl font-serif text-white/[0.03] select-none group-hover:text-sienna/10 transition-colors">
                  0{index + 1}
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-serif text-cream group-hover:text-sienna transition-colors duration-300">
                    {item.title}
                  </h4>
                  <div className="w-12 h-px bg-sienna/50 group-hover:w-full transition-all duration-700" />
                  <p className="font-sans text-cream/60 font-light leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-sans text-sienna font-bold">
                  <span>{item.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-start">
          <p className="text-[10px] uppercase tracking-[0.5em] font-sans text-cream/30">
            Scroll to explore our advantages
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
