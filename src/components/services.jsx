// import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Beginner Classes",
      description: "Start your journey with foundational poses, gentle adjustments, and basic breathwork.",
      icon: "🌱"
    },
    {
      title: "Private Sessions",
      description: "One-on-one guidance tailored entirely to your unique body, pace, and personal goals.",
      icon: "🧘"
    },
    {
      title: "Corporate Wellness",
      description: "Bring mindfulness to your workplace to reduce team stress and foster deeper focus.",
      icon: "🌿"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-stone-100 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-800 mb-4 tracking-tight">
            Our Offerings
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto font-light">
            Discover a practice that fits your lifestyle, whether you are stepping onto the mat for the first time or deepening your discipline.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              /* 👇 Here is the updated line with the hover effect 👇 */
              className="bg-stone-50 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col items-start border border-stone-200/60 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-emerald-100/60 flex items-center justify-center text-2xl mb-6 text-emerald-800 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Card Content */}
              <h3 className="text-xl font-medium text-stone-800 mb-3">
                {service.title}
              </h3>
              <p className="text-stone-600 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}