
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import Booking from './components/Booking';

const App: React.FC = () => {
  useEffect(() => {
    // Intercept clicks on links starting with # for smooth scrolling
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = link.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL hash without jumping
          window.history.pushState(null, '', `#${id}`);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Calculator />
        <Features />
        <Booking />
        <FAQ />
      </main>
      <footer className="bg-dark-bg py-10 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-xl font-bold mb-4 md:mb-0">Aptinu</div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aptinu. Performance-based AI solutions.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
