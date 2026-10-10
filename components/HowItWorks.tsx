import React from 'react';
import { PlugsConnected, Lightning, ChatCircleText, BellRinging } from '@phosphor-icons/react';
import Section from './Section';

const steps = [
  { Icon: PlugsConnected, title: 'Connect lead sources', desc: 'We integrate with your forms, ads, CRM and calendar. No technical work for you.' },
  { Icon: Lightning, title: 'AI follows up instantly', desc: 'Within minutes of a lead coming in, the AI reaches out on their preferred channel.' },
  { Icon: ChatCircleText, title: 'Qualify and book', desc: 'It asks questions, handles objections and books the appointment in your calendar.' },
  { Icon: BellRinging, title: 'Reminders and show-ups', desc: 'Automated reminders keep show-up rates high. You only pay for appointments that happen.' },
];

const HowItWorks: React.FC = () => (
  <Section id="how-it-works" className="border-y border-line bg-surface/40">
    <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">How it works</h2>

    <div className="relative mt-14">
      <div aria-hidden className="absolute inset-x-0 top-6 hidden h-px bg-gradient-to-r from-accent/60 via-line to-line lg:block" />
      <ol className="grid gap-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-4 lg:gap-8">
        {steps.map(({ Icon, title, desc }) => (
          <li key={title} className="relative">
            <span className="grid size-12 place-items-center rounded-full border border-line bg-ink">
              <Icon weight="duotone" className="size-6 text-accent" aria-hidden />
            </span>
            <h3 className="mt-6 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </Section>
);

export default HowItWorks;
