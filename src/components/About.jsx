import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Commitment',
    description: 'We stand by our promises and go the extra mile to deliver consistent, reliable, and high-quality service.',
    icon: <Target className="text-blue-500" size={24} />,
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve by constantly exploring new technologies to improve our offerings.',
    icon: <Zap className="text-yellow-500" size={24} />,
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and the highest ethical standards.',
    icon: <Shield className="text-green-500" size={24} />,
  },
  {
    title: 'Teamwork',
    description: 'We believe in working collaboratively with our clients to achieve shared goals and vision.',
    icon: <Users className="text-purple-500" size={24} />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-[#0a0f1d] text-gray-800 dark:text-gray-200 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4 sm:mb-6">
              Your Technical Partner For <span className="bg-gradient-to-r from-accent to-cyan-500 bg-clip-text text-transparent">Growth</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              At MichaelKeysoft, we build high-performing websites and deliver reliable technical support that keep your business running smoothly. We handle the complexity of technology so you can focus on what matters most—growing your business.
            </p>
            
            <div className="mb-8">
              <Link 
                to="/resume"
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-bold rounded-full transition-all transform hover:-translate-y-0.5 shadow-md shadow-accent/20 hover:bg-accent/90"
              >
                <span>View My Professional Credentials</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border border-gray-100/50 dark:border-gray-800/80 rounded-2xl flex items-center justify-center shadow-sm">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-white mb-1 sm:mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative mt-4 lg:mt-0"
          >
            <div className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
                <p className="text-2xl sm:text-3xl font-bold mb-1">100+</p>
                <p className="text-xs sm:text-sm opacity-80 uppercase tracking-widest">Projects Delivered</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
