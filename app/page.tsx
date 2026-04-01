"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import Loader from "@/components/Loader";


export const dynamic = "force-static";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

    useEffect(() => {
    // Simulate luxury initial load
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <WhyChooseUs/>
      <Timeline/>
      <Destinations/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  );
}
