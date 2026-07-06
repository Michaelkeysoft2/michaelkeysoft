import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a website take to build?',
    answer: 'A standard business website typically takes 2 to 4 weeks. More complex solutions, such as custom e-commerce stores or full-stack web applications, can take 4 to 8 weeks depending on specifications and content readiness.'
  },
  {
    question: 'Do you provide hosting?',
    answer: 'Yes! We configure and set up hosting on fast, modern cloud servers like Vercel, Netlify, AWS, or traditional managed VPS hosts. We set up domain records, SSL security certificates, and automated CDN delivery.'
  },
  {
    question: 'Do you offer maintenance?',
    answer: 'Absolutely. We offer flexible monthly maintenance plans. This covers routine backups, speed optimization checks, software dependencies upgrades, security auditing, and content adjustments.'
  },
  {
    question: 'Can you redesign an existing website?',
    answer: 'Yes, we can rebuild your existing site from scratch using modern technology. We focus on enhancing speed, improving the visual design to fit your modern branding, and restructuring layout to maximize client lead conversion.'
  },
  {
    question: 'Which technologies do you use?',
    answer: 'We specialize in modern JavaScript frameworks. For front-end design, we use React, Vite, Next.js, and Tailwind CSS. For backend databases and APIs, we use Node.js, Express, PostgreSQL, and MongoDB. We also build custom WordPress sites.'
  },
  {
    question: 'Do you build e-commerce websites?',
    answer: 'Yes! We build secure and scalable e-commerce solutions complete with shopping carts, product management databases, order processing, and payment gateway integration (Stripe, Flutterwave, Paystack, PayPal, etc.).'
  },
  {
    question: 'What are your payment terms?',
    answer: 'We typically work on a 50/50 plan: a 50% deposit before the project kicks off, and the remaining 50% upon final approval, testing, and migration to your live Vercel/Vantage server.'
  },
  {
    question: 'How does technical support work?',
    answer: 'We provide remote support via Slack, email, WhatsApp, and phone. For critical operations, we offer proactive server monitoring and fast troubleshooting response SLA times to minimize downtime.'
  }
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-100 dark:border-gray-800/80 py-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-4 text-primary dark:text-white hover:text-accent dark:hover:text-accent font-bold text-lg transition-colors focus:outline-none"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 dark:text-gray-500"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-[#0a0f1d] transition-colors duration-300 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Find answers to common questions about our development process, services, and policies.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-[#0d1527]/50 rounded-[32px] p-6 sm:p-10 border border-gray-100 dark:border-gray-800/30 shadow-xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
