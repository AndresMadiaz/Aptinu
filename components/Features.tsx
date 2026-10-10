import React from 'react';
import { ChatText, WhatsappLogo, EnvelopeSimple, ChatsCircle, Funnel, CalendarPlus, Handshake } from '@phosphor-icons/react';
import Section from './Section';

const channels = [
  { name: 'SMS', Icon: ChatText },
  { name: 'WhatsApp', Icon: WhatsappLogo },
  { name: 'Email', Icon: EnvelopeSimple },
  { name: 'Chat', Icon: ChatsCircle },
];

const Features: React.FC = () => (
  <Section id="what-we-do">
    <h2 className="max-w-2xl text-3xl font-semibold tracking-tighter text-balance md:text-5xl">
      AI appointment setting. That's it.
    </h2>
    <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">
      We build AI agents that turn new leads into confirmed appointments, using the tools you already have.
    </p>

    <div className="mt-14 grid gap-4 lg:grid-cols-3">
      <article className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7 md:p-9 lg:col-span-2">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-20 size-96 rounded-full bg-[radial-gradient(circle,rgb(255_107_157/0.16),transparent_65%)]"
        />
        <h3 className="relative text-2xl font-semibold tracking-tight">Follows up within minutes</h3>
        <p className="relative mt-3 max-w-[48ch] leading-relaxed text-muted">
          Every new lead gets a reply while they're still interested, on the channel they prefer.
        </p>
        <ul className="relative mt-8 flex flex-wrap gap-2.5">
          {channels.map(({ name, Icon }) => (
            <li key={name} className="inline-flex items-center gap-2 rounded-full border border-line bg-ink px-4 py-2 text-sm">
              <Icon className="size-4 text-accent" aria-hidden />
              {name}
            </li>
          ))}
        </ul>
      </article>

      <article className="rounded-2xl border border-line p-7 md:p-9">
        <Funnel weight="duotone" className="size-8 text-accent" aria-hidden />
        <h3 className="mt-6 text-xl font-semibold tracking-tight">Qualifies every lead</h3>
        <p className="mt-3 leading-relaxed text-muted">Asks the right questions and handles objections before anything hits your calendar.</p>
      </article>

      <article className="rounded-2xl border border-line p-7 md:p-9">
        <CalendarPlus weight="duotone" className="size-8 text-accent" aria-hidden />
        <h3 className="mt-6 text-xl font-semibold tracking-tight">Books into your calendar</h3>
        <p className="mt-3 leading-relaxed text-muted">Works with GoHighLevel, Google Calendar and your existing CRM.</p>
      </article>

      <article className="flex flex-col justify-between gap-8 rounded-2xl bg-accent p-7 text-ink md:flex-row md:items-end md:p-9 lg:col-span-2">
        <h3 className="max-w-md text-2xl font-semibold tracking-tight md:text-3xl">
          You focus on closing deals. We focus on filling your calendar.
        </h3>
        <Handshake weight="duotone" className="size-12 shrink-0" aria-hidden />
      </article>
    </div>
  </Section>
);

export default Features;
