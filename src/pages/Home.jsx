import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import PricingCalculator from '../components/PricingCalculator';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      
      // Delay slightly to ensure component render completes
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const navbarHeight = 72;
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 200);

      return () => clearTimeout(timeout);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Features />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Testimonials />
      <PricingCalculator />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
