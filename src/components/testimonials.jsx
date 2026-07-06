// import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Finding Riverstone has transformed my mornings. The instructors lead with such gentle, grounding energy.",
      name: "Elena R."
    },
    {
      quote: "Finally, a studio that doesn't feel competitive. It is a genuine sanctuary where I can just be present with my breath.",
      name: "Marcus T."
    },
    {
      quote: "The beginner classes gave me the confidence I lacked. I feel stronger, calmer, and more deeply connected to my body.",
      name: "Sarah L."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-stone-100 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-800 tracking-tight">
            Community Voices
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-stone-50 rounded-3xl p-8 sm:p-10 shadow-sm border border-stone-200/60 flex flex-col justify-between h-full"
            >
              {/* Quote */}
              <p className="text-stone-600 font-light italic leading-relaxed mb-8 text-lg">
                "{testimonial.quote}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-stone-200 flex-shrink-0 border border-stone-300/50"></div>
                
                {/* Name */}
                <span className="font-medium text-emerald-800">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}