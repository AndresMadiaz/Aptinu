import React from 'react';
import { ArrowDown } from '@phosphor-icons/react';
import Section from './Section';

const benefits = [
  { title: 'Zero risk', desc: "You only pay when we deliver results. No budget wasted on software you don't use." },
  { title: 'Aligned incentives', desc: 'We only succeed when you do, so our focus is on lead quality and show-ups.' },
  { title: 'No wasted budget', desc: "Stop paying for leads that don't convert. Pay for the outcome you want." },
  { title: 'Predictable cost', desc: 'Know exactly what each appointment costs and scale with confidence.' },
];

const Pricing: React.FC = () => (
  <Section id="pricing">
    <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Performance-based pricing</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-balance md:text-5xl">
          Only pay for appointments that show up.
        </h2>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
          No monthly software fees, no setup costs and no paying for leads that ghost. You pay a flat fee per
          qualified appointment that attends. The price depends on your industry and average deal value, and we
          agree it on the strategy call.
        </p>
        <a
          href="#calculator"
          className="mt-8 inline-flex h-13 items-center gap-2 rounded-full border border-line px-7 font-semibold transition-colors hover:border-white/25 hover:bg-white/5 active:scale-[0.98]"
        >
          Calculate your ROI
          <ArrowDown weight="bold" className="size-4" aria-hidden />
        </a>
      </div>

      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {benefits.map((b) => (
          <div key={b.title} className="border-t border-line pt-6">
            <dt className="text-lg font-semibold tracking-tight">{b.title}</dt>
            <dd className="mt-2 leading-relaxed text-muted">{b.desc}</dd>
          </div>
        ))}
      </dl>
    </div>
  </Section>
);

export default Pricing;
