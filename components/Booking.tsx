import React from 'react';
import Section from './Section';
import ApplyLink from './ApplyLink';

const Booking: React.FC = () => (
  <Section id="booking" className="overflow-hidden">
    <div
      aria-hidden
      className="pointer-events-none absolute -bottom-72 -left-40 size-[640px] rounded-full bg-[radial-gradient(circle,rgb(255_107_157/0.14),transparent_65%)]"
    />
    <div className="relative rounded-2xl border border-line bg-surface px-7 py-14 md:px-14 md:py-20">
      <h2 className="max-w-3xl text-4xl font-semibold tracking-tighter text-balance md:text-6xl">
        Ready to fill your calendar?
      </h2>
      <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-muted">
        Tell us about your business. It takes less than 2 minutes, there's no commitment, and we reply within 24
        hours.
      </p>
      <ApplyLink className="mt-10" />
    </div>
  </Section>
);

export default Booking;
