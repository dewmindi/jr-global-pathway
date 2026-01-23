
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ebony text-cream/40 py-12 px-8 md:px-20 border-t border-cream/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs uppercase tracking-[0.2em] font-sans order-3 md:order-1">
          © 2026 JR Global Pathway. All Rights Reserved.
        </div>

        {/* <div className="text-2xl font-serif text-cream uppercase tracking-widest order-1 md:order-2">
          JR Global Pathway
        </div> */}

        <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-sans order-2 md:order-3">
          <a href="#" className="hover:text-cream transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-cream transition-colors duration-300">LinkedIn</a>
          <a href="#" className="hover:text-cream transition-colors duration-300">Facebook</a>
        </div>
      </div>
      
      <div className="mt-12 text-[8px] uppercase tracking-[0.5em] text-center font-sans opacity-50">
        Curated by Senior Designer Dewmindi
      </div>
    </footer>
  );
};

export default Footer;
