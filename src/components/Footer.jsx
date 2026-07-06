import React from 'react';
import { GitBranch, Globe, Monitor, Code, Heart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
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
    <footer className="bg-gray-50 dark:bg-[#070b14] pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-gray-100 dark:border-gray-800/40 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand Block */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-primary dark:bg-accent rounded-xl flex items-center justify-center p-1.5 shadow-lg group flex-shrink-0">
                <Logo className="w-full h-full text-white transition-transform group-hover:scale-110" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-primary dark:text-white tracking-tight">MichaelKeysoft</span>
                <p className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase mt-0.5">Fast and Reliable Service</p>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Premium software engineering and digital design services tailored to your business needs. Building the future of the web, one pixel at a time.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a 
                href="https://github.com/Michaelkeysoft2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all"
                aria-label="GitHub"
              >
                <GitBranch size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all"
                aria-label="Systems"
              >
                <Monitor size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all"
                aria-label="Code"
              >
                <Code size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary dark:text-white font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm sm:text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm sm:text-base">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm sm:text-base">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm sm:text-base">
                  View Professional CV
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-primary dark:text-white font-bold mb-4 sm:mb-6">Newsletter</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 sm:mb-6">Subscribe to get the latest updates and digital insights.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-3 sm:px-4 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white rounded-l-xl focus:outline-none focus:ring-1 focus:ring-accent/30 text-sm"
              />
              <button className="px-3 sm:px-4 py-3 bg-primary dark:bg-accent text-white rounded-r-xl font-bold hover:bg-primary-light dark:hover:bg-accent-light transition-colors text-sm whitespace-nowrap cursor-pointer">
                Go
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 border-t border-gray-100 dark:border-gray-800/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} MichaelKeysoft. All rights reserved.</p>
          <p className="flex items-center">
            Made with <Heart size={13} className="mx-1 text-red-500 fill-current" /> in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
