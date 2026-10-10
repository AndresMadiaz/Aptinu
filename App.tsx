import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Calculator from './components/Calculator';
import Fit from './components/Fit';
import FAQ from './components/FAQ';
import Booking from './components/Booking';

const App: React.FC = () => (
  <div className="flex min-h-[100dvh] flex-col overflow-x-clip">
    <Header />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Calculator />
      <Fit />
      <FAQ />
      <Booking />
    </main>
    <footer className="border-t border-line px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="text-base font-semibold tracking-tight text-fg">
          Aptinu
        </a>
        <p>© {new Date().getFullYear()} Aptinu. Performance-based AI appointment setting.</p>
      </div>
    </footer>
  </div>
);

export default App;
