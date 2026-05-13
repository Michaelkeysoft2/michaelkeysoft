import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GitBranch, Globe, Monitor, Code } from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-[100px] transform translate-x-20"></div>
      <div className="absolute -bottom-20 -left-20 -z-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      {/* Background Watermark */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-20 opacity-[0.03]">
        <Logo className="w-[800px] h-[800px] text-primary" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
                Empowering Businesses Through Tech
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
                Powering Your <br />
                <span className="text-accent">Business</span> Growth
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                We build high-impact web applications and deliver reliable technical solutions that elevate your organization’s digital presence. We handle the complexity so you can stay focused on growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="#projects"
                  className="group flex items-center px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <div className="flex items-center space-x-4">
                  <a href="#" className="p-3 text-gray-400 hover:text-primary transition-colors bg-gray-100 rounded-full hover:bg-white hover:shadow-md">
                    <GitBranch size={24} />
                  </a>
                  <a href="#" className="p-3 text-gray-400 hover:text-primary transition-colors bg-gray-100 rounded-full hover:bg-white hover:shadow-md">
                    <Globe size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mt-16 lg:mt-0 relative"
          >
            <div className="relative z-10 w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-accent rounded-[40px] rotate-6 transform translate-x-4 translate-y-4 -z-10 opacity-20"></div>
              <div className="bg-white p-4 rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Business Analytics" 
                  className="rounded-[30px] w-full h-auto"
                />
              </div>
              
              {/* Floating Stats */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <Monitor size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">IT Support</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Code size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">Next.js</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Tech Stack</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
