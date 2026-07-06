import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useToast } from './ToastContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const { addToast } = useToast();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const field = id.replace('contact-', '');
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Field validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      addToast('Please fill in all required fields (Name, Email, and Message).', 'error');
      return;
    }

    setIsSending(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

      // Fallback check if the Vercel key hasn't been configured yet
      if (accessKey === 'YOUR_ACCESS_KEY_HERE') {
        console.warn('Web3Forms API key is missing. Add VITE_WEB3FORMS_KEY to Vercel/local .env environment variables.');
        
        // Simulate a 1.5 second loading experience and trigger a friendly instructional toast
        await new Promise(resolve => setTimeout(resolve, 1500));
        addToast('Preview mode success! Setup VITE_WEB3FORMS_KEY on Vercel for actual delivery.', 'info');
        
        // Reset state and DOM fields
        setFormData({ name: '', email: '', subject: '', message: '' });
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-subject').value = '';
        document.getElementById('contact-message').value = '';
        
        setIsSending(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Project Inquiry from Michaelkeysoft.com',
          message: formData.message,
          from_name: 'Michaelkeysoft Portfolio Contact'
        })
      });

      const result = await response.json();
      if (result.success) {
        addToast('Your message has been delivered to Michael Keysoft!', 'success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset DOM fields
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-subject').value = '';
        document.getElementById('contact-message').value = '';
      } else {
        addToast(result.message || 'Submission error. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Contact Form Error:', error);
      addToast('Network error. Failed to deliver message.', 'error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-primary dark:bg-[#00172e] text-white overflow-hidden relative transition-colors duration-300">
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
            <div className="bg-white dark:bg-[#0d1527] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl border border-gray-100 dark:border-gray-800/40 transition-colors">
              <form onSubmit={handleFormSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Full Name *</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      required
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email Address *</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      required
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Subject</label>
                  <input 
                    id="contact-subject"
                    type="text" 
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message *</label>
                  <textarea 
                    id="contact-message"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all min-h-[130px] sm:min-h-[150px]"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 sm:py-5 bg-accent text-white rounded-2xl font-bold shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3 cursor-pointer disabled:opacity-60 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <span>Sending Message...</span>
                      <Loader2 size={20} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
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
