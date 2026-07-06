import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

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

  // Close menu first, then scroll after the animation closes (150ms delay)
  const handleMobileNavClick = (href) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const id = href.replace('#', '');
      if (location.pathname !== '/') {
        navigate(`/${href}`);
      } else {
        const el = document.getElementById(id);
        if (el) {
          const navbarHeight = 72;
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    }, 150);
  };

  // Desktop smooth scroll or navigation
  const handleDesktopNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    if (location.pathname !== '/') {
      navigate(`/${href}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 72;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-[#0a0f1d]/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-white/90 dark:bg-[#0a0f1d]/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <Link
          to="/#home"
          onClick={(e) => handleDesktopNavClick(e, '#home')}
          className="flex items-center space-x-2 flex-shrink-0"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary dark:bg-accent rounded-xl flex items-center justify-center p-1.5 shadow-lg border border-white/10 group">
              <Logo className="w-full h-full text-white transition-transform group-hover:scale-110" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-primary dark:text-white">
              MichaelKeysoft
            </span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleDesktopNavClick(e, link.href)}
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 mx-1"></div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CV Button */}
          <Link
            to="/resume"
            className="px-4 py-2 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent rounded-full text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all transform hover:-translate-y-0.5 shadow-sm"
          >
            View CV
          </Link>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleDesktopNavClick(e, '#contact')}
            className="px-5 py-2 bg-primary dark:bg-accent text-white rounded-full text-sm font-semibold hover:bg-primary-light dark:hover:bg-accent-light transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Nav Actions (Theme & Menu toggler) */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-300 transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-[#0c1324] border-t border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleMobileNavClick(link.href)}
                  className="w-full text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent hover:bg-accent/5 px-4 py-3 rounded-xl transition-all"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="border-t border-gray-100 dark:border-gray-800 my-2 pt-2 flex flex-col gap-2">
                <Link
                  to="/resume"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3.5 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-center rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors shadow-sm"
                >
                  View CV / Resume
                </Link>
                <button
                  type="button"
                  onClick={() => handleMobileNavClick('#contact')}
                  className="w-full py-3.5 bg-primary dark:bg-accent text-white text-center rounded-xl font-bold hover:bg-primary-light dark:hover:bg-accent-light transition-colors shadow-md"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
