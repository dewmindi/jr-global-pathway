"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const text = "JR Global Pathways";
  const letters = text.split("");

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ebony text-cream space-y-8 overflow-hidden">
      <motion.div
        initial={{ x: "-100vw", rotate: 90 }}
        animate={{ x: "100vw", rotate: 90 }}
        transition={{ duration: 5, ease: "linear" }}
        className="absolute"
      >
        <img src="/AirplaneIcon.svg" alt="Airplane Icon" width="150" height="150" />
      </motion.div>
      <div className="flex justify-center">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: index * 0.1 + 2.0 }}
            className="text-2xl font-serif tracking-[0.3em] uppercase"
            style={{ whiteSpace: "pre" }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
