import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, MessageSquareCode, Award, ArrowRight } from 'lucide-react';

const CacPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const hasLoaded = sessionStorage.getItem('cacPopupHasLoaded');
      const delay = hasLoaded ? 15000 : 3000;

      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('cacPopupHasLoaded', 'true');
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const phoneNumber = "2348039579410";
  const messageText = "Hi, I want to do CAC business or company registration. How do I go about it?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-120%', opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: '-120%', opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-24 left-4 sm:left-6 md:left-8 z-40 w-[calc(100%-2rem)] sm:w-[350px] bg-white dark:bg-[#0c1222] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl shadow-primary/10 dark:shadow-accent/5 overflow-hidden"
        >
          {/* Header Accent Bar */}
          <div className="h-1.5 bg-gradient-to-r from-accent via-accent-light to-primary"></div>
          
          <div className="p-6 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close Ad"
            >
              <X size={16} />
            </button>

            {/* Special Tag */}
            <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light text-[10px] font-bold uppercase tracking-wider mb-4">
              <Award size={10} className="animate-bounce" />
              <span>Specialized Service</span>
            </div>

            {/* Content */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-primary to-primary-light dark:from-accent dark:to-accent-light rounded-2xl text-white shadow-lg flex-shrink-0">
                <Building2 size={24} className="animate-pulse" />
              </div>
              <div>
                <h3 className="text-base font-bold text-primary dark:text-white leading-snug">
                  CAC Business & Company Registration
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Start your business legally today! Get your CAC certificate, status report, and TIN without stress.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-4 pt-3 border-t border-gray-50 dark:border-gray-800/50 space-y-2">
              <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span>Business Name Registration</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span>Private Limited Liability (LTD)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span>NGO, Association, & Church Registration</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span>(NIN Registration & Plastic ID card services)</span>
              </div>
            </div>

            {/* Action Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="mt-5 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-[#25D366]/20 transition-all flex items-center justify-center space-x-2 group"
            >
              <MessageSquareCode size={18} className="group-hover:scale-110 transition-transform" />
              <span>Click to Register</span>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CacPopup;
