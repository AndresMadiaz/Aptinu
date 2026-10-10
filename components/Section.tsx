import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => (
  <section id={id} className={`relative scroll-mt-16 px-5 py-20 md:px-10 md:py-28 ${className}`}>
    <div className="reveal relative mx-auto max-w-6xl">{children}</div>
  </section>
);

export default Section;
