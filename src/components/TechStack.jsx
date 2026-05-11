import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  'HTML5', 'CSS3', 'JavaScript', 'Python', 'Django', 'Fast API', 'MySQL', 
  'React.js', 'Next.js', 'WordPress', 'Tailwind CSS', 'Vite', 'Framer Motion'
];

const TechStack = () => {
  return (
    <section className="py-20 bg-primary overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Technology Stack</h2>
          <p className="text-white/60 text-lg">We use the best tools to deliver world-class digital solutions.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 hover:border-accent/50 transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
