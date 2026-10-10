import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import ApplyLink from './ApplyLink';

const navLinks = [
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="text-lg font-semibold tracking-tight" onClick={close}>
          Aptinu
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-muted transition-colors hover:text-fg">
              {link.name}
            </a>
          ))}
          <ApplyLink size="sm" />
        </nav>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center rounded-full text-fg md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="size-6" /> : <List className="size-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-menu" className="border-t border-line px-5 pb-6 pt-2 md:hidden" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={close}
              className="block border-b border-line py-4 text-lg text-fg"
            >
              {link.name}
            </a>
          ))}
          <ApplyLink className="mt-6 w-full" onClick={close} />
        </nav>
      )}
    </header>
  );
};

export default Header;
