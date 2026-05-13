import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Left: Contact Info */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Let's Build Something <br /><span className="text-accent">Amazing</span> Together
              </h2>
              <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-12 max-w-lg">
                Have a project in mind? Or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
              </p>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Email Me</p>
                    <a href="mailto:michaelkeysoft@gmail.com" className="text-base sm:text-xl font-semibold hover:text-accent transition-colors break-all">
                      michaelkeysoft@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Call / Whatsapp</p>
                    <p className="text-base sm:text-xl font-semibold">08039579410</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Visit Me</p>
                    <p className="text-base sm:text-xl font-semibold">3, Barika, Opposite Ui second gate, Ibadan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl">
              <form className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-100 rounded-2xl text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-100 rounded-2xl text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                  <input 
                    id="contact-subject"
                    type="text" 
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-100 rounded-2xl text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea 
                    id="contact-message"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-100 rounded-2xl text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all min-h-[130px] sm:min-h-[150px]"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="button"
                  onClick={() => {
                    const name = document.getElementById('contact-name').value;
                    const subject = document.getElementById('contact-subject').value;
                    const message = document.getElementById('contact-message').value;
                    window.location.href = `mailto:michaelkeysoft@gmail.com?subject=${encodeURIComponent(subject || 'Project Inquiry')}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;
                  }}
                  className="w-full py-4 sm:py-5 bg-accent text-white rounded-2xl font-bold shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
