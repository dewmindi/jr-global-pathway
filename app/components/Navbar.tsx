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

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = ({ items, className = "" }: { items: typeof LEFT_NAV_ITEMS, className?: string }) => (
    <div className={`flex items-center space-x-12 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.path}
          className="text-xs uppercase tracking-[0.2em] font-sans hover:text-sienna transition-colors duration-300"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-20 py-8 text-cream mix-blend-difference">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-start">
          <NavLinks items={LEFT_NAV_ITEMS} />
        </div>

        <div className="flex-none text-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif tracking-widest uppercase">
           JR Global Pathway
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 justify-end">
          <NavLinks items={RIGHT_NAV_ITEMS} />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-cream z-50"
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm text-cream flex flex-col items-center justify-center space-y-8"
          >
            {[...LEFT_NAV_ITEMS, ...RIGHT_NAV_ITEMS].map((item) => (
              <Link
                key={item.label}
                href={item.path}
                onClick={toggleMenu}
                className="text-4xl font-serif hover:text-sienna transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
