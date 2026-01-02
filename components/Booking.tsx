
import React from 'react';
import Section from './Section';
import GlowEffect from './GlowEffect';

const Booking: React.FC = () => {
  return (
    <Section id="booking" dark className="bg-dark-bg py-48 text-center">
      <GlowEffect position="center" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
          Ready to fill your calendar?
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Tell us about your business and we'll show you exactly how we can help. 
          Takes less than 2 minutes.
        </p>

        <div className="flex flex-col items-center justify-center space-y-4">
          <a 
            href="https://tally.so/r/RGMKQv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-warm hover:bg-accent-warm-light text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 hover:brightness-110 shadow-[0_20px_50px_rgba(255,107,157,0.3)] inline-block"
          >
            Get in touch
          </a>
          
          <div className="space-y-1">
            <p className="text-gray-500 text-lg font-medium opacity-80">
              No commitment. We'll reach out within 24 hours.
            </p>
            <p className="text-gray-500 text-sm opacity-60">
              Opens in a new tab. Takes less than 2 minutes.
            </p>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          Aptinu. All rights reserved. Built for results.
        </div>
      </div>
    </Section>
  );
};

export default Booking;
