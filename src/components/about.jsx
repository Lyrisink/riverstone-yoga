// import React from 'react';

import aboutImage from '../assets/yoga-studio.jpg'; 

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-stone-50 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Image Tag */}
        <img 
          src={aboutImage} 
          alt="Peaceful yoga studio interior" 
          className="w-full h-full object-cover rounded-3xl aspect-[4/3] md:aspect-square shadow-sm border border-stone-200/60"
        />

        {/* Text Content */}
        <div className="flex flex-col items-start text-left">
          <span className="block text-sm uppercase tracking-widest text-emerald-800 font-semibold mb-4">
            Our Philosophy
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-800 mb-6 tracking-tight">
            Strength found in stillness
          </h2>
          
          <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed">
            At Riverstone Yoga, we believe the mat is a mirror for how we move through life. Our sanctuary is designed to help you strip away the daily noise, inviting you to connect deeply with your breath and move with intentionality. We are committed to fostering an unhurried, inclusive space where you are supported exactly as you are today.
          </p>
        </div>
        
      </div>
    </section>
  );
}