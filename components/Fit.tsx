import React from 'react';
import { Check, X } from '@phosphor-icons/react';
import Section from './Section';

const goodFit = [
  'You get leads but struggle with fast, consistent follow-up.',
  'You want more booked appointments without hiring more staff.',
  "You're comfortable with performance-based pricing.",
  'You close deals once people are on the phone or in the door.',
  'You use a calendar tool like GoHighLevel or Google Calendar.',
];

const notFit = [
  'You get fewer than 30 leads per month.',
  'You prefer monthly retainers regardless of results.',
  'You only sell to walk-ins, with no appointment system.',
  "You're not ready to let AI handle first conversations.",
];

const Fit: React.FC = () => (
  <Section id="who-its-for">
    <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">Is this a fit?</h2>

    <div className="mt-14 grid gap-4 md:grid-cols-[1.15fr_1fr]">
      <div className="rounded-2xl border border-accent/30 bg-accent-soft p-7 md:p-9">
        <h3 className="text-xl font-semibold tracking-tight">This is for you if</h3>
        <ul className="mt-6 space-y-4">
          {goodFit.map((text) => (
            <li key={text} className="flex gap-3 leading-relaxed">
              <Check weight="bold" className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-line p-7 md:p-9">
        <h3 className="text-xl font-semibold tracking-tight text-muted">It's not for you if</h3>
        <ul className="mt-6 space-y-4">
          {notFit.map((text) => (
            <li key={text} className="flex gap-3 leading-relaxed text-muted">
              <X weight="bold" className="mt-1 size-4 shrink-0" aria-hidden />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default Fit;
