import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'SHC Healthcare Staffing',
    category: 'Healthcare Platform',
    description: 'A modern staffing solution for healthcare professionals, featuring advanced filtering and real-time updates.',
    image: '/projects/shc.png',
    link: 'https://shc-project.vercel.app/',
    github: 'https://github.com/',
  },
  {
    title: 'FoodPrice Solution',
    category: 'E-commerce / Fintech',
    description: 'An innovative food price comparison and e-commerce platform helping users find the best deals locally.',
    image: '/projects/foodprice.png',
    link: 'https://foodprice-solution.vercel.app/',
    github: 'https://github.com/',
  },
  {
    title: 'The Royal Times',
    category: 'News & Media',
    description: 'A global news platform delivering accurate, timely, and insightful news to a worldwide audience.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://theroyaltimes.com',
    github: 'https://github.com/',
  },
  {
    title: 'Chigroup Recyclers',
    category: 'Agro-Tech & Recycling',
    description: 'Advanced farming solutions and eco-friendly motor scrap recycling platform with specialized logistics.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://chigroupng.com',
    github: 'https://github.com/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Success Stories</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-xl text-lg">
              We collaborate with forward-thinking organizations to build modern digital experiences that drive real impact.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-0"
          >
            <a href="#" className="flex items-center text-accent font-bold group">
              View Full Portfolio <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[40px] mb-8 bg-gray-100 aspect-video shadow-2xl border border-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-110"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-110"
                  >
                    <GitBranch size={24} />
                  </a>
                </div>
              </div>
              
              <div className="px-4">
                <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Vite', 'Enterprise', 'Scalable'].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-gray-50 text-gray-400 rounded-full text-xs font-bold tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
