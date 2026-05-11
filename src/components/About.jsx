import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap } from 'lucide-react';

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
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Your Technical Partner For <span className="text-accent">Growth</span></h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At MichaelKeysoft, we build high-performing websites and deliver reliable technical support that keep your business running smoothly. We handle the complexity of technology so you can focus on what matters most—growing your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-3xl font-bold mb-1">100+</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">Projects Delivered</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
