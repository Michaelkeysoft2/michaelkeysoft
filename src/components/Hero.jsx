import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const canvasRef = useRef(null);

  // Typewriter effect states & logic
  const words = [
    'Websites',
    'Web Applications',
    'E-Commerce Stores',
    'Cloud Solutions',
    'Business Automation',
    'IT Solutions'
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullWord = words[wordIndex % words.length];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(55);
        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex(prev => prev + 1);
          setTypingSpeed(250);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const codeLines = [
      'const app = express();',
      'import React from "react";',
      'function buildWebsite(client) {',
      '  return deployToCloud(client);',
      '}',
      'async function fetchData(url) {',
      '  const res = await fetch(url);',
      '  return res.json();',
      '}',
      'export default App;',
      '<div className="hero">',
      'npm run build',
      'git push origin main',
      'const [state, setState] = useState();',
      'app.listen(3000, () => {',
      '  console.log("Server running");',
      '});',
      'SELECT * FROM projects;',
      'docker-compose up -d',
      'tailwind.config.js',
      'module.exports = {',
      '  plugins: [require("autoprefixer")]',
      '};',
      'const router = useRouter();',
      'useEffect(() => { loadData(); }, []);',
    ];

    const colors = [
      { bright: '#ff4d6a', medium: 'rgba(255, 77, 106, 0.7)', dim: 'rgba(255, 77, 106, 0.35)' },
      { bright: '#ffffff', medium: 'rgba(255, 255, 255, 0.7)', dim: 'rgba(255, 255, 255, 0.3)' },
      { bright: '#007bff', medium: 'rgba(0, 123, 255, 0.7)', dim: 'rgba(0, 123, 255, 0.35)' },
      { bright: '#f472b6', medium: 'rgba(244, 114, 182, 0.7)', dim: 'rgba(244, 114, 182, 0.35)' },
      { bright: '#22d3ee', medium: 'rgba(34, 211, 238, 0.7)', dim: 'rgba(34, 211, 238, 0.35)' },
      { bright: '#4ade80', medium: 'rgba(74, 222, 128, 0.7)', dim: 'rgba(74, 222, 128, 0.35)' },
      { bright: '#fb923c', medium: 'rgba(251, 146, 60, 0.7)', dim: 'rgba(251, 146, 60, 0.35)' },
      { bright: '#c084fc', medium: 'rgba(192, 132, 252, 0.7)', dim: 'rgba(192, 132, 252, 0.35)' },
      { bright: '#facc15', medium: 'rgba(250, 204, 21, 0.7)', dim: 'rgba(250, 204, 21, 0.3)' },
    ];

    const fontSize = 21;
    let columns = Math.floor(canvas.width / (fontSize * 0.7));
    const drops = Array(columns).fill(0).map(() => Math.random() * -100);
    const lineIndex = Array(columns).fill(0).map(() => Math.floor(Math.random() * codeLines.length));
    const charIndex = Array(columns).fill(0).map(() => Math.floor(Math.random() * 30));
    const speeds = Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.7);
    const colColors = Array(columns).fill(0).map(() => colors[Math.floor(Math.random() * colors.length)]);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 15, 30, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Fira Code", "Courier New", monospace`;

      for (let i = 0; i < columns; i++) {
        const line = codeLines[lineIndex[i] % codeLines.length];
        const char = line[charIndex[i] % line.length] || ' ';

        const x = i * (fontSize * 0.7);
        const y = drops[i] * fontSize;

        const palette = colColors[i];
        const brightness = Math.random();
        if (brightness > 0.7) {
          ctx.fillStyle = palette.bright;
        } else if (brightness > 0.4) {
          ctx.fillStyle = palette.medium;
        } else {
          ctx.fillStyle = palette.dim;
        }

        ctx.fillText(char, x, y);

        drops[i] += speeds[i];
        charIndex[i]++;

        if (y > canvas.height + 50) {
          drops[i] = Math.random() * -20;
          lineIndex[i] = Math.floor(Math.random() * codeLines.length);
          charIndex[i] = 0;
          speeds[i] = 0.3 + Math.random() * 0.7;
          colColors[i] = colors[Math.floor(Math.random() * colors.length)];
        }
      }
    };

    ctx.fillStyle = '#0a0f1e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      resize();
      columns = Math.floor(canvas.width / (fontSize * 0.7));
      ctx.fillStyle = '#0a0f1e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />

      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10"></div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <span 
            className="inline-block px-6 py-2.5 mb-8 text-sm font-bold tracking-widest text-white uppercase bg-accent rounded-full shadow-lg"
          >
            Welcome to MichaelKeysoft
          </span>

          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight min-h-[160px] sm:min-h-[180px] lg:min-h-[220px]"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)' }}
          >
            We Build High-Performing <br />
            <span className="text-accent inline-block min-w-[200px] border-r-4 border-accent pr-1 select-none whitespace-nowrap">
              {currentText}
            </span>
          </h1>

          <p 
            className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{ textShadow: '0 1px 15px rgba(0,0,0,0.7)' }}
          >
            From custom website development to reliable technical support, we handle the technology so you can focus on growing your business with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <a 
              href="#services"
              className="w-full sm:w-auto px-10 py-4 bg-accent text-white rounded-full font-bold text-lg shadow-2xl hover:bg-accent/90 transition-all transform hover:-translate-y-1 hover:shadow-accent/30 text-center"
            >
              Explore Services
            </a>
            <Link 
              to="/resume"
              className="w-full sm:w-auto px-10 py-4 bg-white/15 text-white border border-white/20 rounded-full font-bold text-lg shadow-2xl hover:bg-white/25 transition-all transform hover:-translate-y-1 backdrop-blur-md text-center"
            >
              View CV / Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
