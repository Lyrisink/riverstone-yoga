// import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-100 py-8 px-6 sm:px-12 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        
        {/* Brand & Copyright */}
        <div className="text-stone-500 text-sm font-light text-center md:text-left tracking-wide">
          &copy; {currentYear} Riverstone Yoga. All rights reserved.
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-light text-stone-500 tracking-wide">
          <a 
            href="#about" 
            className="hover:text-emerald-700 transition-colors duration-300"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="hover:text-emerald-700 transition-colors duration-300"
          >
            Contact
          </a>
          <a 
            href="#instagram" 
            className="hover:text-emerald-700 transition-colors duration-300"
          >
            Instagram
          </a>
        </nav>

      </div>
    </footer>
  );
}