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
    <section ref={containerRef} style={{ height: dynamicHeight }} className="relative bg-cream">
      <div ref={stickyRef} className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-32 px-8 md:px-20">
        <Reveal>
            <h2 className="text-xs uppercase tracking-[0.5em] font-sans mb-4 opacity-60 text-ebony">Why Choose Us</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-ebony mb-20">Unparalleled Excellence</h3>
          </Reveal>
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
              <div className="bg-white/6 backdrop-blur-md border border-cream/10 rounded-2xl p-8 h-full flex flex-col justify-between">
                {/* <div className="relative overflow-hidden mb-8 aspect-[4/3] rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ebony/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div> */}

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

        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] font-sans text-ebony/50">
            Scroll to explore our advantages
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
