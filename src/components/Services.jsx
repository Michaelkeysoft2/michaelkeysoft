import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Smartphone, Globe, Layers, Zap } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React and Next.js, ensuring high performance and scalability.',
    icon: <Code size={32} />,
    color: 'bg-blue-500',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric designs that prioritize usability and aesthetics, creating memorable experiences for your customers.',
    icon: <Monitor size={32} />,
    color: 'bg-purple-500',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile solutions that bring your ideas to life on both iOS and Android devices.',
    icon: <Smartphone size={32} />,
    color: 'bg-green-500',
  },
  {
    title: 'Digital Branding',
    description: 'Strategic branding services to help your business stand out in the competitive digital landscape.',
    icon: <Globe size={32} />,
    color: 'bg-orange-500',
  },
  {
    title: 'Cloud Solutions',
    description: 'Reliable and secure cloud infrastructure setup and management for your business operations.',
    icon: <Layers size={32} />,
    color: 'bg-cyan-500',
  },
  {
    title: 'Performance Optimization',
    description: 'Speed up your existing digital products to improve user retention and search engine rankings.',
    icon: <Zap size={32} />,
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
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">My Expertise</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              I provide a wide range of digital services to help businesses grow and succeed in the modern world.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[30px] shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
