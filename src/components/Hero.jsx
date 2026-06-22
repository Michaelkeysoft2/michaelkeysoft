import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-1730-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay — strong enough to make text pop */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      {/* Bottom gradient for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

      {/* Content Block */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <span 
            className="inline-block px-6 py-2.5 mb-8 text-sm font-bold tracking-widest text-white uppercase bg-accent rounded-full shadow-lg"
          >
            Welcome to MichaelKeysoft
          </span>

          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.4)' }}
          >
            We Build High-Performing Websites &amp; Technical Solutions for Your Business
          </h1>

          <p 
            className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.6)' }}
          >
            From custom website development to reliable technical support, we handle the technology so you can focus on growing your business with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#services"
              className="w-full sm:w-auto px-10 py-4 bg-accent text-white rounded-full font-bold text-lg shadow-2xl hover:bg-accent/90 transition-all transform hover:-translate-y-1 hover:shadow-accent/30"
            >
              Explore Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

