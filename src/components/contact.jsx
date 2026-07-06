// import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 md:py-32 bg-stone-50 px-6 sm:px-12">
      <div className="max-w-2xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-800 mb-4 tracking-tight">
            Connect with us
          </h2>
          <p className="text-stone-600 text-lg font-light">
            Have questions about our classes or looking for a private session? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <form 
          className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-stone-200/60 flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-stone-700 tracking-wide">
              Name
            </label>
            <input 
              type="text" 
              id="name"
              placeholder="Your name"
              className="px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-stone-700 tracking-wide">
              Email
            </label>
            <input 
              type="email" 
              id="email"
              placeholder="hello@example.com"
              className="px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-colors"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-stone-700 tracking-wide">
              Message
            </label>
            <textarea 
              id="message"
              rows="5"
              placeholder="How can we help you?"
              className="px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-colors resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="mt-4 bg-emerald-700 hover:bg-emerald-800 text-stone-50 px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}