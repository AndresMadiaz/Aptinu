import React from 'react';
import ApplyLink from './ApplyLink';
import ChatPreview from './ChatPreview';

const Hero: React.FC = () => (
  <section id="top" className="relative overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pt-36 lg:min-h-[100dvh] lg:pb-24">
    <div
      aria-hidden
      className="pointer-events-none absolute -right-40 -top-40 size-[640px] rounded-full bg-[radial-gradient(circle,rgb(255_107_157/0.14),transparent_65%)]"
    />

    <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <div>
        <h1 className="rise text-4xl font-semibold leading-[1.05] tracking-tighter text-balance sm:text-5xl lg:text-6xl">
          Turn your leads into booked appointments.{' '}
          <span className="text-muted">Only pay for the ones that show up.</span>
        </h1>

        <p className="rise mt-6 max-w-[46ch] text-lg leading-relaxed text-muted [--delay:100ms]">
          AI agents follow up within minutes, qualify every lead and book them straight into your calendar.
        </p>

        <div className="rise mt-10 flex flex-col gap-3 sm:flex-row [--delay:200ms]">
          <ApplyLink />
          <a
            href="#how-it-works"
            className="inline-flex h-13 items-center justify-center rounded-full border border-line px-7 font-semibold text-fg transition-colors hover:border-white/25 hover:bg-white/5 active:scale-[0.98]"
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="rise [--delay:250ms]">
        <ChatPreview />
      </div>
    </div>
  </section>
);

export default Hero;
