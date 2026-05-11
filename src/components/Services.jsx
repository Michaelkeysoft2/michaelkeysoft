import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Smartphone, Globe, Layers, Zap, Shield, Headphones, Briefcase } from 'lucide-react';

const webServices = [
  {
    title: 'Custom Web Development',
    description: 'High-performing websites and web applications tailored to your business needs.',
    icon: <Code size={24} />,
    color: 'bg-blue-500',
  },
  {
    title: 'WordPress Development',
    description: 'Scalable and easy-to-manage WordPress solutions for businesses of all sizes.',
    icon: <Monitor size={24} />,
    color: 'bg-indigo-500',
  },
  {
    title: 'SEO & Analytics',
    description: 'Optimize your digital presence to drive traffic and measurable growth.',
    icon: <Zap size={24} />,
    color: 'bg-yellow-500',
  },
];

const itServices = [
  {
    title: '24/7 Technical Support',
    description: 'Proactive monitoring and expert troubleshooting to keep your systems running smoothly.',
    icon: <Headphones size={24} />,
    color: 'bg-green-500',
  },
  {
    title: 'Office 365 Support',
    description: 'Full setup, management, and support for your business productivity tools.',
    icon: <Briefcase size={24} />,
    color: 'bg-orange-500',
  },
  {
    title: 'IT Consulting',
    description: 'Strategic advice to help you leverage technology for business success.',
    icon: <Shield size={24} />,
    color: 'bg-red-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Comprehensive Solutions</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer end-to-end digital services—from building your website to keeping it fast, secure, and visible.
            </p>
          </motion.div>
        </div>

        <div className="space-y-20">
          {/* Web Development Block */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-10 flex items-center">
              <span className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center mr-4 shadow-lg">1</span>
              Web Development & Design
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-md group-hover:rotate-6 transition-transform`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* IT Support Block */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-10 flex items-center">
              <span className="w-10 h-10 bg-accent text-white rounded-lg flex items-center justify-center mr-4 shadow-lg">2</span>
              Managed IT & Technical Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-md group-hover:rotate-6 transition-transform`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
