"use client";
import React from 'react';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import Navbar from '../components/Navbar';

const services = [
  {
    id: '1',
    title: 'Executive Relocation',
    description: 'Bespoke migration solutions for C-suite professionals and their families.',
    image: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: '2',
    title: 'Investor Visas',
    description: 'Strategic planning for Golden Visas and citizenship through investment.',
    image: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: '3',
    title: 'Residency Programs',
    description: 'Pathways to permanent residency in the world\'s most desirable locations.',
    image: 'https://picsum.photos/800/600?random=3',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar/>  
      {/* Hero Section */}
      <section className="py-28 px-8 md:px-20 bg-cream text-center">
        <Reveal width="100%">
          <h1 className="text-5xl md:text-7xl font-serif text-ebony mb-6">Our Services</h1>
        </Reveal>
        <Reveal delay={0.2} width="100%">
          <p className="max-w-3xl mx-auto text-lg font-sans text-ebony/70">
            Explore our tailored services designed to meet your unique needs and aspirations.
          </p>
        </Reveal>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.2}>
              <div className="bg-white/6 backdrop-blur-md border border-cream/10 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-ebony mb-4">{service.title}</h3>
                  <p className="text-ebony/70 text-sm mb-6">{service.description}</p>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-ebony text-cream text-sm uppercase tracking-wide rounded-lg hover:bg-cream hover:text-ebony transition-all duration-300 inline-block"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}