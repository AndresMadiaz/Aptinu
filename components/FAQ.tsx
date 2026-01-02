
import React, { useState } from 'react';
import Section from './Section';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "How much do I pay per appointment?",
      answer: "Our fees are flat rates per qualified show-up. The exact price depends on your industry and average deal value. We discuss this clearly during our strategy call."
    },
    {
      question: "What counts as a qualified appointment?",
      answer: "A qualified appointment is someone who matches your target criteria and shows up for the scheduled meeting. We verify their intent and needs before booking."
    },
    {
      question: "What if the lead doesn't show up?",
      answer: "You don't pay. Our model is performance-based. If they ghost or cancel, the cost is on us. We only win when you get results."
    },
    {
      question: "How fast can we get started?",
      answer: "Most systems are live within 7 to 14 days. This includes integration with your calendar, lead sources, and CRM."
    },
    {
      question: "Do I need to change my CRM or calendar?",
      answer: "No. We integrate with your existing tools like GoHighLevel, Google Calendar, or standard CRMs. No rip and replace required."
    },
    {
      question: "Will AI replace my sales team?",
      answer: "No. Our AI handles the initial follow-up and booking. This frees your sales team to focus on closing deals instead of chasing cold leads."
    },
    {
      question: "What industries do you work with?",
      answer: "We focus on high-ticket service businesses. Gyms, clinics, real estate, home services, and agencies see the best results."
    },
    {
      question: "Is my data safe and private?",
      answer: "We use enterprise-grade encryption and strictly follow data privacy laws. Your lead information and CRM data are protected at all times."
    },
    {
      question: "What kind of support do I get?",
      answer: "You get a dedicated account manager. We monitor your AI agents daily and optimize them for the highest conversion rates."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Since you only pay per appointment, there are no long-term lock-in contracts. We want to earn your business every single month."
    }
  ];

  return (
    <Section id="faq" className="bg-light-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-bold">{item.question}</span>
                <span className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-accent-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
