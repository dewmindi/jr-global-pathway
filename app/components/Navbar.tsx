"use client";
import React, { useState } from 'react';
import Link from "next/link";

import { motion, AnimatePresence } from 'framer-motion';
import { LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS } from '@/constants';


const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = ({ items, className = "" }: { items: typeof LEFT_NAV_ITEMS, className?: string }) => (
    <div className={`flex items-center space-x-10 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.path}
          className="text-[10px] uppercase tracking-[0.3em] font-sans hover:text-sienna transition-all duration-300 relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-sienna transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'py-4 bg-ebony/80 backdrop-blur-md border-b border-cream/5' : 'py-8'
      }`}>
        <div className="max-w-450 mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Navigation (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-start">
            <NavLinks items={LEFT_NAV_ITEMS} />
          </div>

          {/* Center Logo */}
          <div className="shrink-0 px-4">
            <Link href="/" className="group flex flex-col items-center">
              <span className={`text-xl md:text-2xl font-serif tracking-[0.15em] uppercase transition-all duration-300 ${
                scrolled ? 'text-cream scale-90' : 'text-cream md:mix-blend-difference'
              }`}>
                JR Global <span className="text-sienna font-light italic lowercase tracking-normal ml-1">Pathway</span>
              </span>
              <div className="h-px w-0 bg-sienna/50 transition-all duration-500 group-hover:w-full mt-1" />
            </Link>
          </div>

          {/* Right Navigation (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-end">
            <NavLinks items={RIGHT_NAV_ITEMS} />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
              scrolled ? 'text-cream' : 'text-cream mix-blend-difference'
            } z-50`}
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-[#1a1a1a] flex flex-col items-center justify-center"
          >
            {/* Geometric Background Elements for Mobile Menu */}
            <div className="absolute top-[-10%] right-[-10%] w-75 h-75 rounded-full bg-sienna/10 blur-[100px]" />
            <div className="absolute bottom-[-5%] left-[-5%] w-62.5 h-62.5  rounded-full bg-cream/5 blur-[80px]" />
            
            <div className="relative w-full h-full flex flex-col items-center justify-center space-y-12 px-8 overflow-y-auto">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center space-y-8"
              >
                {[...LEFT_NAV_ITEMS, ...RIGHT_NAV_ITEMS].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                  >
                    <Link
                      href={item.path}
                      onClick={toggleMenu}
                      className="text-3xl font-serif text-cream hover:text-sienna transition-all duration-300 flex flex-col items-center group"
                    >
                      <span className="text-[10px] uppercase tracking-[0.5em] text-sienna mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 flex flex-col items-center"
              >
                <div className="w-12 h-px bg-cream/20 mb-4" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40">JR Global Pathway</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
