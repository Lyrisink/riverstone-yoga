// import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-stone-50 px-6 sm:px-12 py-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Brand / Eyebrow Text */}
        <span className="block text-sm sm:text-base uppercase tracking-widest text-emerald-800 font-semibold mb-4">
          Riverstone Yoga
        </span>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-stone-800 mb-6 tracking-tight">
          Find your stillness
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          Experience mindful movement and build lasting connections in a supportive community dedicated to your holistic well-being.
        </p>

        {/* Call to Action Button */}
        <button className="bg-emerald-700 hover:bg-emerald-800 text-stone-50 px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer">
          Book a free trial class
        </button>
      </div>
    </section>
  );
}