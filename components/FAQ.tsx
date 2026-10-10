import React from 'react';
import { Plus } from '@phosphor-icons/react';
import Section from './Section';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: 'How much do I pay per appointment?',
    answer: 'A flat fee per qualified appointment that shows up. The exact price depends on your industry and average deal value, and we agree it clearly on the strategy call.',
  },
  {
    question: 'What counts as a qualified appointment?',
    answer: 'Someone who matches your target criteria and shows up to the scheduled meeting. We confirm their intent and needs before booking.',
  },
  {
    question: "What if the lead doesn't show up?",
    answer: "You don't pay. If they ghost or cancel, the cost is on us. We only win when you get results.",
  },
  {
    question: 'How fast can we get started?',
    answer: 'Most systems are live within 7 to 14 days, including integration with your calendar, lead sources and CRM.',
  },
  {
    question: 'Do I need to change my CRM or calendar?',
    answer: 'No. We work with your existing tools like GoHighLevel, Google Calendar or standard CRMs.',
  },
  {
    question: 'Will AI replace my sales team?',
    answer: 'No. The AI handles first follow-up and booking, so your team can spend its time closing instead of chasing leads.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'High-ticket service businesses. Gyms, clinics, real estate, home services and agencies see the best results.',
  },
  {
    question: 'Is my data safe and private?',
    answer: 'Yes. We use encryption and follow data privacy laws. Your lead and CRM data are protected at all times.',
  },
  {
    question: 'What kind of support do I get?',
    answer: 'A dedicated account manager. We monitor your AI agents daily and keep improving their conversion rates.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: "Yes. You pay per appointment, so there are no long-term contracts. We want to earn your business every month.",
  },
];

const FAQ: React.FC = () => (
  <Section id="faq" className="border-t border-line">
    <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">Questions</h2>
        <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-muted">
          Anything else, ask us on the strategy call.
        </p>
      </div>

      <div className="divide-y divide-line border-y border-line">
        {faqData.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-medium transition-colors hover:text-accent">
              {item.question}
              <Plus
                weight="bold"
                className="size-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                aria-hidden
              />
            </summary>
            <p className="max-w-[60ch] pb-6 leading-relaxed text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </Section>
);

export default FAQ;
