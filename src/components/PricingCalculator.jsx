import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, ArrowRight } from 'lucide-react';
import { useToast } from './ToastContext';

const servicesList = [
  { id: 'biz-site', name: 'Custom Business Website', price: 250000, type: 'one-time' },
  { id: 'ecom-store', name: 'E-Commerce Store', price: 450000, type: 'one-time' },
  { id: 'web-app', name: 'Custom Web Application', price: 600000, type: 'one-time' },
  { id: 'seo', name: 'SEO Optimization', price: 80000, type: 'one-time' },
  { id: 'hosting', name: 'Cloud Hosting Setup', price: 50000, type: 'one-time' },
  { id: 'maintenance', name: 'Monthly Support & Maintenance', price: 30000, type: 'recurring' },
  { id: 'branding', name: 'Branding & Logo Design', price: 100000, type: 'one-time' },
];

const PricingCalculator = () => {
  const [selectedIds, setSelectedIds] = useState(['biz-site', 'seo']);
  const { addToast } = useToast();

  const toggleService = (id) => {
    // If selecting biz-site, ecom-store, or web-app, we might want to toggle off the others (as they are usually mutually exclusive, though they can be combined. Let's allow combining but keep it flexible)
    setSelectedIds(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const calculateTotals = () => {
    let oneTimeTotal = 0;
    let recurringTotal = 0;

    servicesList.forEach(service => {
      if (selectedIds.includes(service.id)) {
        if (service.type === 'one-time') {
          oneTimeTotal += service.price;
        } else {
          recurringTotal += service.price;
        }
      }
    });

    return { oneTimeTotal, recurringTotal };
  };

  const { oneTimeTotal, recurringTotal } = calculateTotals();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleRequestQuote = () => {
    const selectedServices = servicesList.filter(s => selectedIds.includes(s.id));
    if (selectedServices.length === 0) {
      addToast('Please select at least one service to request a quote!', 'info');
      return;
    }

    // Prefill Contact form message
    const msgElement = document.getElementById('contact-message');
    const subjectElement = document.getElementById('contact-subject');
    
    if (subjectElement) {
      subjectElement.value = 'Custom Project Quote Request';
    }

    if (msgElement) {
      let messageText = `Hi Michael! I used your website estimator and would like a custom quote for the following services:\n\n`;
      selectedServices.forEach(s => {
        messageText += `✔ ${s.name} (${formatCurrency(s.price)}${s.type === 'recurring' ? '/mo' : ''})\n`;
      });
      messageText += `\nEstimated Price Summary:`;
      if (oneTimeTotal > 0) messageText += `\n- Setup Cost: ${formatCurrency(oneTimeTotal)}`;
      if (recurringTotal > 0) messageText += `\n- Recurring Support: ${formatCurrency(recurringTotal)}/month`;
      messageText += `\n\nLet's schedule a call to discuss the project details!`;
      
      msgElement.value = messageText;
      
      // Dispatch input event for React control (in case it is controlled)
      const event = new Event('input', { bubbles: true });
      msgElement.dispatchEvent(event);
    }

    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 72;
      const top = contactSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      addToast('Calculator details loaded into contact form below!', 'success');
    }
  };

  return (
    <section id="estimator" className="py-20 bg-gray-50 dark:bg-[#070b14] transition-colors duration-300 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
              Project Cost Estimator
            </h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Select the solutions you need for your business and get an instant, transparent starting price estimate.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Services Checklist */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0d1527] rounded-[32px] p-6 sm:p-10 shadow-xl border border-gray-100 dark:border-gray-800/50 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white mb-8 flex items-center">
                <Calculator size={24} className="text-accent mr-3" />
                Select Your Services
              </h3>
              <div className="space-y-4">
                {servicesList.map(service => {
                  const isChecked = selectedIds.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`w-full p-4 sm:p-5 rounded-2xl flex items-center justify-between border text-left transition-all focus:outline-none ${
                        isChecked
                          ? 'border-accent bg-accent/5 dark:bg-accent/10 shadow-md'
                          : 'border-gray-100 dark:border-gray-800/80 bg-gray-50/50 dark:bg-gray-900/30 hover:border-gray-200 dark:hover:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all ${
                          isChecked
                            ? 'bg-accent border-accent text-white'
                            : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800'
                        }`}>
                          {isChecked && <Check size={14} strokeWidth={3} />}
                        </div>
                        <div>
                          <span className="font-bold text-primary dark:text-white block text-sm sm:text-base">
                            {service.name}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {service.type === 'recurring' ? 'Monthly recurring' : 'One-time setup'}
                          </span>
                        </div>
                      </div>
                      <span className="font-bold text-accent text-sm sm:text-base whitespace-nowrap">
                        {formatCurrency(service.price)}
                        {service.type === 'recurring' && <span className="text-xs text-gray-500">/mo</span>}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing Summary Card */}
          <div className="lg:col-span-5 bg-primary dark:bg-[#00172e] rounded-[32px] p-8 sm:p-10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent pointer-events-none opacity-40"></div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-accent blur-3xl pointer-events-none opacity-30"></div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-8">Estimated Investment</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <div>
                    <span className="text-white/70 block text-sm">One-time Setup</span>
                    <span className="text-xs text-white/50">Development & branding</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">
                    {formatCurrency(oneTimeTotal)}
                  </span>
                </div>

                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <div>
                    <span className="text-white/70 block text-sm">Monthly Support</span>
                    <span className="text-xs text-white/50">Hosting, updates & backups</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-accent-light">
                    {formatCurrency(recurringTotal)}
                    <span className="text-xs text-white/50">/mo</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 sm:mt-16">
              <p className="text-xs text-white/60 mb-6 leading-relaxed">
                *This is an approximate cost estimator for standard specifications. Custom functionality, complex integrations, or large databases may affect pricing. Contact us for an exact quotation.
              </p>
              
              <button
                onClick={handleRequestQuote}
                className="w-full py-4 bg-accent hover:bg-accent-light text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-accent/20"
              >
                <span>Request Custom Quote</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingCalculator;
