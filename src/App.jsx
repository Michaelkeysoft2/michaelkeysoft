import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Settings, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  ExternalLink, 
  Menu, 
  X,
  MessageCircle,
  Code,
  Layout,
  Server,
  ChevronRight
} from 'lucide-react';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 C 27.9 10 10 27.9 10 50 C 10 72.1 27.9 90 50 90" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
    <path d="M50 90 C 72.1 90 90 72.1 90 50 C 90 27.9 72.1 10 50 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 70 L 40 30 L 50 50 L 60 30 L 70 70" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round"/>
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "SHC Healthcare Staffing",
      description: "A comprehensive platform for healthcare staffing and recruitment, featuring modern UI and streamlined workflows.",
      image: "/projects/shc.png",
      link: "https://shc-project.vercel.app/",
      tags: ["React", "Tailwind", "Vite"]
    },
    {
      title: "FoodPrice Solution",
      description: "An innovative e-commerce platform for food price comparison and grocery shopping management.",
      image: "/projects/foodprice.png",
      link: "https://foodprice-solution.vercel.app/",
      tags: ["E-commerce", "Search", "React"]
    }
  ];

  const services = [
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      description: "Custom-built websites and web applications tailored to your business needs, from landing pages to complex systems."
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Development",
      description: "High-performance mobile and desktop applications designed for seamless user experience across all devices."
    },
    {
      icon: <Settings size={32} />,
      title: "IT Solutions",
      description: "Expert technical support, system maintenance, and digital transformation consulting to power your growth."
    },
    {
      icon: <Code size={32} />,
      title: "Custom Software",
      description: "Bespoke software solutions engineered to solve specific organizational challenges and improve efficiency."
    },
    {
      icon: <Layout size={32} />,
      title: "UI/UX Design",
      description: "Premium, user-centric designs that make your digital products stand out and provide exceptional usability."
    },
    {
      icon: <Server size={32} />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure setup and management to ensure your applications are fast and reliable."
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          <div className="logo">
            <Logo />
            <span>michaelkeysoft</span>
          </div>
          
          <div className="nav-links desktop-only">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Excellence in Digital Solutions
            </motion.span>
            <h1>We Build Websites & Solutions That Power Your Success</h1>
            <p>From custom web development to ongoing technical support — we handle the complexity so you can focus on growth. Get a website that works as hard as you do.</p>
            <div className="hero-btns">
              <a href="#portfolio" className="btn btn-primary">View Our Work</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </div>
          </motion.div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Technical Expertise</h2>
            <p>We offer end-to-end digital services to help businesses strengthen their online presence and grow with modern technology.</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Results We've Delivered</h2>
            <p>See how we've helped businesses achieve measurable growth through custom web development and digital solutions.</p>
          </div>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="portfolio-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img src={project.image} alt={project.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary portfolio-btn">
                    Visit Website <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <div className="section-title">
            <h2>Our Tech Stack</h2>
            <p>We leverage the latest technologies to build robust, scalable, and high-performance solutions.</p>
          </div>
          <div className="tech-grid">
            {['React', 'Next.js', 'Vite', 'Node.js', 'Python', 'Django', 'Fast API', 'MySQL', 'PostgreSQL', 'Tailwind CSS', 'WordPress', 'AWS'].map((tech, i) => (
              <div key={i} className="tech-item">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Let's Build Something Great Together</h2>
              <p>Whether you need a new website, a custom web application, or ongoing technical support — we're ready to help.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon"><Phone /></div>
                  <div>
                    <h4>Call or Whatsapp</h4>
                    <p>08039579410</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><Mail /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>michaelkeysoft@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><MapPin /></div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>3, baroka, Opposite Ui second gate, Ibadan</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><MessageCircle /></div>
                  <div>
                    <h4>Connect on WhatsApp</h4>
                    <a href="https://wa.me/2348039579410" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                      Chat Now <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo white">
                <Logo />
                <span>michaelkeysoft</span>
              </div>
              <p>Your Technical Partner for Modern Digital Experiences.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#"><Github /></a>
                <a href="#"><Globe /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} michaelkeysoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
