
import React from 'react';
import Section from './Section';
import GlowEffect from './GlowEffect';

const Hero: React.FC = () => {
  return (
    <Section id="hero" dark className="min-h-screen flex items-center pt-32">
      <GlowEffect position="top-right" />
      <GlowEffect position="bottom-left" />
      
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Turn your leads into booked appointments. Only pay for the ones that show up.
        </h1>
        
        <div className="space-y-6 mb-10 text-lg md:text-xl text-gray-400 max-w-2xl">
          <p>
            We do one thing. AI powered appointment setting for service businesses.
          </p>
          <p>
            You only pay for qualified appointments that actually show up to the call or visit.
          </p>
          <p>
            Our team handles everything. Instant follow up. Qualification. Objection handling. Booking into your calendar. Automated reminders.
          </p>
          <p>
            No upfront software costs. No setup fees. No paying for leads that ghost. Just results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://tally.so/r/RGMKQv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-warm hover:bg-accent-warm-light text-white px-10 py-4 rounded-full font-bold text-center transition-all duration-200 transform hover:scale-105 shadow-xl shadow-accent-warm/20"
          >
            Apply now
          </a>
          <a
            href="#how-it-works"
            className="border border-accent-warm text-accent-warm hover:bg-accent-warm/5 px-10 py-4 rounded-full font-bold text-center transition-all duration-200 nav-link"
          >
            See how it works
          </a>
        </div>

        <div className="mt-16 inline-block">
          <div className="glass-card bg-white/5 border border-white/10 p-6 rounded-2xl shadow-2xl">
            <p className="text-sm text-gray-400 mb-1">Guaranteed Performance</p>
            <p className="text-xl font-semibold">100% Risk Free Appointment Setting</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
