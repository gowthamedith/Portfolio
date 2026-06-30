import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Dribbble } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Featured Work', href: '#work' },
    { name: 'Design Process', href: '#process' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 border-b border-slate-100 shadow-sm backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
        id="navbar-header"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand/Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
            id="logo-link"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-display text-white font-black text-lg shadow-md group-hover:scale-105 transition-all">
              G
            </div>
            <div>
              <span className="block font-bold font-display text-slate-900 tracking-tight leading-none text-base">Gowtham</span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5 block leading-none">UI/UX Designer</span>
            </div>
          </a>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-550 hover:text-blue-600 transition-colors font-sans relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Availability Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-semibold tracking-wide uppercase font-sans">Available for Projects</span>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-1 cursor-pointer"
              id="header-hire-btn"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] font-bold uppercase font-sans">Available</span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:bg-slate-50 rounded-xl cursor-pointer"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 bg-white border-b border-slate-100 shadow-xl p-6 md:hidden flex flex-col gap-6"
            id="mobile-navigation-drawer"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold font-display text-slate-800 hover:text-blue-600 py-2 border-b border-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                Let's Work Together
              </a>

              <div className="flex items-center justify-center gap-6 text-slate-400 py-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                  aria-label="Dribbble"
                >
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
