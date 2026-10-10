import React from 'react';
import { CalendarCheck } from '@phosphor-icons/react';

// Example conversation showing what the AI agent does with a new lead.
const messages = [
  { from: 'agent', text: 'Hi Marta, thanks for your enquiry about physio for your knee. Is this from a recent injury or something ongoing?' },
  { from: 'lead', text: 'Ongoing, about 3 months now' },
  { from: 'agent', text: 'Got it, we treat that a lot. I have Thursday at 10:30 or Friday at 16:00. Which suits you?' },
  { from: 'lead', text: 'Friday works' },
  { from: 'agent', text: "You're booked for Friday at 16:00. I'll send you a reminder the day before." },
] as const;

const ChatPreview: React.FC = () => (
  <figure className="mx-auto w-full max-w-md">
    <div className="rounded-2xl border border-line bg-surface p-4 shadow-[0_30px_80px_-20px_rgb(255_107_157/0.18)] sm:p-5">
      <div className="mb-4 flex items-center justify-between border-b border-line pb-4">
        <div>
          <p className="text-sm font-semibold">Northside Physio</p>
          <p className="text-xs text-muted">New lead from website form</p>
        </div>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">SMS</span>
      </div>

      <ul className="space-y-2.5" aria-label="Example conversation">
        {messages.map((m, i) => (
          <li
            key={i}
            className={`rise flex ${m.from === 'lead' ? 'justify-end' : ''}`}
            style={{ '--delay': `${500 + i * 450}ms` } as React.CSSProperties}
          >
            <p
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                m.from === 'lead' ? 'rounded-br-md bg-accent text-ink' : 'rounded-bl-md bg-surface-2 text-fg'
              }`}
            >
              {m.text}
            </p>
          </li>
        ))}
      </ul>

      <div
        className="rise mt-4 flex items-center gap-3 rounded-xl border border-line bg-ink px-4 py-3"
        style={{ '--delay': `${500 + messages.length * 450}ms` } as React.CSSProperties}
      >
        <CalendarCheck weight="duotone" className="size-6 shrink-0 text-accent" aria-hidden />
        <div className="text-sm">
          <p className="font-medium">Appointment booked</p>
          <p className="text-muted">Fri 16:00, added to your calendar</p>
        </div>
      </div>
    </div>
    <figcaption className="mt-3 text-center text-xs text-muted">Example conversation</figcaption>
  </figure>
);

export default ChatPreview;
