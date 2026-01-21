"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

    useEffect(() => {
    // Simulate luxury initial load
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  if (loading) {
    return (
      <div className="fixed inset-0 bg-ebony flex flex-col items-center justify-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl font-serif text-cream uppercase tracking-widest"
        >
          JR Global Pathway
        </motion.div>
        <div className="w-12 h-[1px] bg-cream/20 relative overflow-hidden">
          <motion.div 
            animate={{ x: [-48, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute h-full w-full bg-white"
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Destinations/>
      <CTA/>
      <Footer/>
    </div>
  );
}
