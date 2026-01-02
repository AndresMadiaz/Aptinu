
import React from 'react';
import Section from './Section';
import GlowEffect from './GlowEffect';

const Features: React.FC = () => {
  return (
    <>
      <Section id="what-we-do" className="bg-light-bg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">AI appointment setting. That's it.</h2>
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
            <p>
              We build AI agents that follow up with your leads within minutes via SMS, WhatsApp, email, or chat.
            </p>
            <p>
              They qualify leads, handle objections, offer available times from your calendar, and book confirmed appointments.
            </p>
            <p>
              Everything integrates with your existing CRM and calendar like GoHighLevel or Google Calendar.
            </p>
            <p>
              You focus on closing deals. Our team focuses on filling your calendar.
            </p>
          </div>
        </div>
      </Section>

      <Section id="pricing" dark className="bg-dark-card py-32">
        <GlowEffect position="center" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card bg-white/5 border border-white/10 p-12 rounded-[3rem] shadow-2xl relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Only pay for appointments that show up</h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-300 mb-10 text-left md:text-center max-w-2xl mx-auto">
              <p>No monthly software fees. No setup costs. No paying for leads that don't convert.</p>
              <p>You pay a flat fee per qualified appointment that shows up to the meeting.</p>
              <p>The price is based on your industry and average deal value. We discuss everything clearly on the strategy call.</p>
              <p className="text-white font-semibold">"If you close 1 in 3 appointments and your average client is worth €500, paying a small fee per appointment is a no brainer."</p>
            </div>
            <a
              href="#calculator"
              className="inline-block bg-accent-warm hover:bg-accent-warm-light text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-accent-warm/20 nav-link"
            >
              Calculate your ROI
            </a>
          </div>
        </div>
      </Section>

      <Section id="how-it-works" dark className="bg-dark-bg">
        <GlowEffect position="top-right" />
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Connect lead sources",
              desc: "We integrate with your forms, ads, CRM, and calendar. No technical work for you."
            },
            {
              step: "02",
              title: "AI follows up instantly",
              desc: "Within minutes of a lead coming in, our AI reaches out via their preferred channel."
            },
            {
              step: "03",
              title: "Qualify and book",
              desc: "AI asks questions, handles objections, and books the appointment directly in your calendar."
            },
            {
              step: "04",
              title: "Reminders and show up",
              desc: "Automated reminders ensure high show up rates. You only pay for appointments that happen."
            }
          ].map((item, i) => (
            <div key={i} className="relative group p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-accent-warm/30 transition-all">
              <span className="text-accent-warm font-bold text-sm mb-4 block opacity-50">{item.step}</span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="who-its-for" className="bg-light-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-black/5">
            <h3 className="text-3xl font-bold mb-8 text-accent-warm">This is for you if...</h3>
            <ul className="space-y-4">
              {[
                "You get leads but struggle with fast, consistent follow up.",
                "You want more booked appointments without hiring more staff.",
                "You're comfortable with performance based pricing.",
                "You close deals when you get people on the phone or in the door.",
                "You use a calendar tool like GoHighLevel or Google Calendar."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="bg-accent-warm/10 text-accent-warm p-1 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  </span>
                  <span className="text-lg text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-black/5">
            <h3 className="text-3xl font-bold mb-8 text-gray-400">It's not for you if...</h3>
            <ul className="space-y-4">
              {[
                "You get fewer than 30 leads per month.",
                "You prefer to pay monthly retainers regardless of results.",
                "You do all sales in person walk-ins only with no appointment system.",
                "You're not ready to let AI handle initial conversations."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="bg-gray-200 text-gray-400 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </span>
                  <span className="text-lg text-gray-500">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="benefits" className="bg-white">
        <h2 className="text-4xl font-bold text-center mb-20">Why Performance-Based?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Zero risk", desc: "You only pay when our team delivers results. No wasted budget on software you don't use." },
            { title: "Aligned incentives", desc: "We succeed only when you succeed. Our focus is 100% on lead quality and show-ups." },
            { title: "No wasted budget", desc: "Stop paying for leads that don't convert. Only pay for the final desired outcome." },
            { title: "Predictable cost", desc: "Know exactly how much your acquisitions cost. Scale your business with confidence." }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a1a1a]">{item.title}</h3>
              <p className="text-xl text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Features;
