"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Reveal } from '../components/Reveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Work Visa',
    message: ''
  });

  return (
    <main className="min-h-scree">
      <Navbar />

      {/* Header Section */}
      <section className="py-20 px-8 text-center ">
        <Reveal width="100%">
          <h1 className="text-5xl font-serif mb-4 uppercase tracking-[0.2em]">Check-In</h1>
          <p className="opacity-70 font-sans tracking-widest uppercase text-sm">Ready to start your migration journey? Book a free consultation with our expert team today.</p>
        </Reveal>
      </section>

      <section className="pb-20 px-4 md:px-20">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-col lg:flex-row  rounded-[2rem] overflow-hidden shadow-2xl relative ">
              
              {/* LEFT SECTION: THE FORM (Passenger Info) */}
              <div className="flex-[2] p-8 md:p-12 bg-slate-100">
                <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
                  <div>
                    <p className="text-[10px] font-bold text-black uppercase tracking-widest mb-1">Document Type</p>
                    <h2 className="text-2xl font-serif text-black uppercase">Inquiry Form</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Priority</p>
                    <h4 className="font-mono text-lg text-green-600 font-bold uppercase">First Class</h4>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full p-4 bg-gray-400/50  border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-ebony/10 transition-all font-mono text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full p-4 bg-gray-400/50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-ebony/10 transition-all font-mono text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Select Service</label>
                    <select className="w-full p-4 bg-gray-400/50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-ebony/10 transition-all font-mono text-sm appearance-none">
                      <option>Work Visa Consultation</option>
                      <option>Study Visa Services</option>
                      <option>Permanent Residency</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Additional Details</label>
                    <textarea 
                      rows="4" 
                      placeholder="Tell us about your plans..."
                      className="w-full p-4 bg-gray-400/50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-ebony/10 transition-all font-mono text-sm"
                    ></textarea>
                  </div>
                </form>
              </div>

              {/* THE PERFORATION LINE */}
              <div className="hidden lg:flex flex-col items-center justify-between py-6 relative bg-white">
                 <div className="w-10 h-10 bg-[#0a0a0a] rounded-full -mt-11 border border-slate-200" />
                 <div className="h-full border-r-2 border-dashed border-slate-200" />
                 <div className="w-10 h-10 bg-[#0a0a0a] rounded-full -mb-11 border border-slate-200" />
              </div>

              {/* RIGHT SECTION: STUB (Action Area) */}
              <div className="lg:w-80 bg-slate-50 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100">
                <div>
                  <div className="mb-8">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Contact Support</p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded bg-ebony/5 flex items-center justify-center text-ebony">✉️</div>
                        <div className='text-black'>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Email</p>
                          <p className="text-xs font-mono">info@jrglobalpathways.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 text-black">
                        <div className="w-8 h-8 rounded bg-ebony/5 flex items-center justify-center text-ebony">📍</div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Terminal</p>
                          <p className="text-xs font-mono">Main St. 101, NY</p>
                        </div>
                      </div>
                                            <div className="flex items-start gap-3 text-black">
                        <div className="w-8 h-8 rounded bg-ebony/5 flex items-center justify-center text-ebony">📞</div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Phone</p>
                          <p className="text-xs font-mono">+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stamp Graphic */}
                  <div className="border-4 border-double border-red-500/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto rotate-12 my-8">
                    <p className="text-red-500/40 font-bold text-[10px] text-center uppercase leading-tight">Approved<br/>Inquiry<br/>2026</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-3 border border-slate-200 rounded-lg">
                     <div className="w-full h-8 flex gap-[1px] items-center overflow-hidden opacity-60">
                        {[...Array(30)].map((_, i) => (
                          <div key={i} className={`bg-slate-800 h-full ${i % 5 === 0 ? 'w-[2px]' : 'w-[0.5px]'}`} />
                        ))}
                      </div>
                      <p className="text-[7px] font-mono mt-1 text-center text-slate-400">CONTACT-DOC-77890</p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-ebony border border-slate-400 text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-700 transition-all rounded-xl shadow-lg shadow-ebony/20"
                  >
                    Submit
                  </button>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}