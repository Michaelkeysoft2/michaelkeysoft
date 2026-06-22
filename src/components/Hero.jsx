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
      
      {/* Background Watermark - hidden on mobile for performance */}
      <div className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 -z-20 opacity-[0.03]">
        <Logo className="w-[800px] h-[800px] text-primary" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Text Block */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
                We Build <span className="text-accent">High-Performing</span> Websites & Technical Solutions for Your Business
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                From custom website development to reliable technical support, we handle the technology so you can focus on growing your business with confidence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#services"
                  className="w-full sm:w-auto group flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
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

          {/* Video Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 mt-12 lg:mt-0 relative pb-10 sm:pb-14"
          >
            <div className="relative z-10 w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-accent rounded-[40px] rotate-6 transform translate-x-4 translate-y-4 -z-10 opacity-20"></div>
              <div className="bg-white p-3 sm:p-4 rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="rounded-[30px] w-full h-auto object-cover"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-1730-large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Floating Stat - Top Left */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 -left-2 sm:-left-8 -translate-y-1/4 bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-50 flex items-center space-x-3"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-accent flex-shrink-0">
                  <Monitor size={20} />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-primary">24/7</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">IT Support</p>
                </div>
              </motion.div>

              {/* Floating Stat - Bottom Right */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-0 -right-2 sm:-right-8 translate-y-1/4 bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-50 flex items-center space-x-3"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Code size={20} />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-primary">Next.js</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Tech Stack</p>
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
