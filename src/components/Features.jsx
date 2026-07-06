import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2 } from 'lucide-react';

const Features = () => {
  const reasons = [
    "Experienced and reliable technical expertise",
    "Fast and responsive customer support",
    "Modern technologies and industry best practices",
    "Transparent communication and project management",
    "Solutions tailored to your business goals",
    "Commitment to quality, innovation, integrity, and teamwork"
  ];

  const industries = [
    "Healthcare",
    "Education",
    "Professional Services",
    "E-commerce",
    "Nonprofit Organizations",
    "Small and Medium-Sized Businesses"
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#070b14] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Why Choose Us */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#0d1527] p-8 lg:p-12 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800/50"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-8">
              Why Choose <span className="text-accent">MichaelKeysoft?</span>
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries We Serve */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary dark:bg-[#00172e] p-8 lg:p-12 rounded-[40px] shadow-xl text-white border border-white/5 relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-accent blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
                Industries We <span className="text-accent">Serve</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/10 dark:bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                    <Building2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
