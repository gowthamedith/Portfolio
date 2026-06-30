import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedWork from './components/FeaturedWork';
import DesignProcess from './components/DesignProcess';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-800 antialiased font-sans flex flex-col justify-between">
      {/* Sticky Header */}
      <Header />

      {/* Main Layout Sections */}
      <main className="flex-1">
        {/* Hero Section with interactive viewport device demo */}
        <Hero />

        {/* Detailed About section */}
        <About />

        {/* Interactive Skills filtering list */}
        <Skills />

        {/* Case Studies grid and full modals */}
        <FeaturedWork />

        {/* Dynamic UX Process roadmap */}
        <DesignProcess />

        {/* Business Achievements benchmarks */}
        <Achievements />

        {/* Custom contact form with direct CV downloader */}
        <Contact />
      </main>

      {/* Fine Print Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-display text-white font-extrabold text-sm">
              G
            </div>
            <div>
              <p className="text-sm font-bold font-display tracking-tight leading-none text-white">Gowtham</p>
              <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase mt-1 leading-none">UI/UX Designer</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 font-sans md:text-center">
            &copy; {new Date().getFullYear()} Gowtham. All rights reserved. Built with pixel-perfect responsive precision.
          </p>

          <div className="flex gap-4 text-xs text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <span>&middot;</span>
            <a href="#work" className="hover:text-blue-400 transition-colors">Work</a>
            <span>&middot;</span>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating Back-To-Top Trigger */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 cursor-pointer border border-blue-500 hover:scale-105"
          aria-label="Back to top"
          id="back-to-top-button"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

