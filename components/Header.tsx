
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight">
          Aptinu
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-200 nav-link"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://tally.so/r/RGMKQv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-warm hover:bg-accent-warm-light text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg shadow-accent-warm/20"
          >
            Apply now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-card border-b border-white/5 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-400 hover:text-white py-2 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://tally.so/r/RGMKQv"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-accent-warm text-white px-6 py-3 rounded-full font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Apply now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
