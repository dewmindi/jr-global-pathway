import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const steps = [
  { title: "Eligibility Check", desc: "An initial deep-dive into your education, experience, and aspirations." },
  { title: "Profile Assessment", desc: "We map your details against current immigration policies and scoring criteria." },
  { title: "Documentation", desc: "The crucial gathering of evidence, certifications, and legal disclosures." },
  { title: "Application Filing", desc: "Meticulous submission with full representation and oversight." },
  { title: "Approval & Guidance", desc: "Support beyond the visa — helping you land and integrate successfully." }
];

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        if (item) {
          gsap.from(item, {
            opacity: 0,
            x: -20,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading text-[#e6f1ff]">The Process</h2>
          <p className="text-xs uppercase tracking-[0.3em] font-sans text-ebony/50">Step-by-step clarity</p>
        </div>
        
        <div className="space-y-24 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          {steps.map((step, i) => (
            <div 
              key={i} 
                  ref={(el) => {
      itemsRef.current[i] = el;
    }}
              className="relative md:pl-12 flex flex-col md:flex-row gap-8"
            >
              <div className="hidden md:flex absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#4fd1c5] shadow-[0_0_10px_#4fd1c5]" />
              <div className="shrink-0">
                <span className="text-xs font-mono text-[#4fd1c5] border border-[#4fd1c5]/30 px-3 py-1 rounded-full uppercase tracking-tighter">
                  Phase 0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 font-heading">{step.title}</h3>
                <p className="text-lg text-[#e6f1ff]/60 leading-relaxed max-w-xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

