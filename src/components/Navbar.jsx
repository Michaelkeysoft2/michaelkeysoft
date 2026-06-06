import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Close menu first, then scroll after the animation closes (100ms delay)
  const handleMobileNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const navbarHeight = 72;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 150);
  };

  // Desktop smooth scroll
  const handleDesktopNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleDesktopNavClick(e, '#home')}
          className="flex items-center space-x-2 flex-shrink-0"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center p-1.5 shadow-lg border border-white/10 group">
              <Logo className="w-full h-full text-white transition-transform group-hover:scale-110" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-primary">
              MichaelKeysoft
            </span>
          </motion.div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleDesktopNavClick(e, link.href)}
              className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleDesktopNavClick(e, '#contact')}
            className="px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-light transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleMobileNavClick(link.href.replace('#', ''))}
                  className="w-full text-left text-base font-semibold text-gray-800 hover:text-accent hover:bg-accent/5 px-4 py-3 rounded-xl transition-all"
                >
                  {link.name}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleMobileNavClick('contact')}
                className="mt-3 w-full py-3.5 bg-primary text-white text-center rounded-xl font-bold hover:bg-primary-light transition-colors shadow-md"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
