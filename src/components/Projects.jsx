import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'SHC Healthcare Staffing',
    category: 'Healthcare Platform',
    slug: 'shc',
    description: 'A modern staffing solution for healthcare professionals, featuring advanced filtering and real-time updates.',
    image: '/projects/shc.png',
    link: 'https://shc-project.vercel.app/',
    github: 'https://github.com/Michaelkeysoft2/SHC-Project',
    tags: ['React', 'Vite', 'Tailwind', 'Vercel'],
  },
  {
    title: 'FoodPrice Solution',
    category: 'E-commerce / Fintech',
    slug: 'foodprice',
    description: 'An innovative food price comparison and e-commerce platform helping users find the best deals locally.',
    image: '/projects/foodprice.png',
    link: 'https://foodprice-solution.vercel.app/',
    github: 'https://github.com/Michaelkeysoft2/foodprice-solution',
    tags: ['React', 'Node.js', 'Commerce', 'Scalable'],
  },
  {
    title: 'SoftTap VTU & Billing',
    category: 'Fintech / Utility Payments',
    slug: 'softtap',
    description: 'A lightning-fast Virtual Top-Up (VTU) platform enabling automated payments for data, TV subscriptions, electricity bills, and result checkers in Nigeria.',
    image: '/projects/softtap.png',
    link: 'https://softtap.vercel.app/',
    github: 'https://github.com/Michaelkeysoft2/softtap',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'Vercel'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0a0f1d] text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">Success Stories</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
              We collaborate with forward-thinking organizations to build modern digital experiences that drive real impact.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-0"
          >
            <Link to="/resume" className="flex items-center text-accent font-bold group">
              View Work Credentials <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden rounded-[40px] mb-8 bg-gray-100 dark:bg-gray-900 aspect-video shadow-2xl border border-gray-100 dark:border-gray-800/40">
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
                  <h3 className="text-3xl font-bold text-primary dark:text-white mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="px-4 mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3.5 py-1.5 bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light rounded-full text-[10px] font-bold tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Link 
                    to={`/case-study/${project.slug}`}
                    className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-sm shadow-md transition-all inline-flex items-center cursor-pointer"
                  >
                    View Case Study <ArrowRight size={16} className="ml-1.5" />
                  </Link>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-850 transition-all inline-flex items-center"
                  >
                    Live Demo <ExternalLink size={14} className="ml-1.5" />
                  </a>
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
