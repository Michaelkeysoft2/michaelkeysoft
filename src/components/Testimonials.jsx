import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Adebayo',
    position: 'Operations Director',
    company: 'SHC Healthcare Staffing',
    text: 'Michael delivered our staffing portal ahead of schedule. Communication was outstanding, and the product has cut our recruitment time by 40%. The UI is smooth and our clinicians love it.',
    rating: 5,
    initials: 'SA',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    name: 'David Chen',
    position: 'Founder',
    company: 'FoodPrice Solution',
    text: 'Building a food e-commerce and comparison app requires high speed and real-time sync. MichaelKeysoft delivered a robust, lightning-fast platform that handled over 10k items on day one without breaking a sweat.',
    rating: 5,
    initials: 'DC',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Elena Rostova',
    position: 'IT Director',
    company: 'Nexus Professional Services',
    text: 'We hired Michael for both web design and ongoing IT consulting. His proactive tech support and deep expertise in React and cloud setups have been instrumental in keeping our business operations running 24/7.',
    rating: 5,
    initials: 'ER',
    color: 'from-emerald-500 to-teal-400'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-[#070b14] transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Don't just take our word for it. Here is how we have helped business owners and startups succeed.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-[#0d1527] p-8 rounded-[32px] shadow-xl border border-gray-100 dark:border-gray-800/50 flex flex-col justify-between relative group transition-all"
            >
              <Quote className="absolute top-6 right-6 text-accent/10 w-16 h-16 pointer-events-none transition-transform group-hover:scale-110" />

              <div>
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 italic relative z-10">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-4 border-t border-gray-100 dark:border-gray-800/80 pt-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-primary dark:text-white font-bold text-base">{t.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                    {t.position}, <span className="text-accent">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
