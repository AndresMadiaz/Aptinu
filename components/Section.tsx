
import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', dark = false }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden ${
        dark ? 'bg-dark-bg text-white' : 'bg-light-bg text-[#1a1a1a]'
      } ${className} fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
