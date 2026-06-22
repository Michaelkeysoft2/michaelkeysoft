import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const canvasRef = useRef(null);

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

    // Code snippets that will be "typed"
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

    // Vibrant color palette for code characters
    const colors = [
      { bright: '#ff4d6a', medium: 'rgba(255, 77, 106, 0.7)', dim: 'rgba(255, 77, 106, 0.35)' },   // Red
      { bright: '#ffffff', medium: 'rgba(255, 255, 255, 0.7)', dim: 'rgba(255, 255, 255, 0.3)' },    // White
      { bright: '#60a5fa', medium: 'rgba(96, 165, 250, 0.7)', dim: 'rgba(96, 165, 250, 0.35)' },     // Blue
      { bright: '#f472b6', medium: 'rgba(244, 114, 182, 0.7)', dim: 'rgba(244, 114, 182, 0.35)' },   // Pink
      { bright: '#22d3ee', medium: 'rgba(34, 211, 238, 0.7)', dim: 'rgba(34, 211, 238, 0.35)' },     // Cyan
      { bright: '#4ade80', medium: 'rgba(74, 222, 128, 0.7)', dim: 'rgba(74, 222, 128, 0.35)' },     // Green
      { bright: '#fb923c', medium: 'rgba(251, 146, 60, 0.7)', dim: 'rgba(251, 146, 60, 0.35)' },     // Orange
      { bright: '#c084fc', medium: 'rgba(192, 132, 252, 0.7)', dim: 'rgba(192, 132, 252, 0.35)' },   // Purple
      { bright: '#facc15', medium: 'rgba(250, 204, 21, 0.7)', dim: 'rgba(250, 204, 21, 0.3)' },      // Yellow
    ];

    // Columns of falling code
    const fontSize = 18;
    let columns = Math.floor(canvas.width / (fontSize * 0.7));
    const drops = Array(columns).fill(0).map(() => Math.random() * -100);
    const lineIndex = Array(columns).fill(0).map(() => Math.floor(Math.random() * codeLines.length));
    const charIndex = Array(columns).fill(0).map(() => Math.floor(Math.random() * 30));
    const speeds = Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.7);
    const colColors = Array(columns).fill(0).map(() => colors[Math.floor(Math.random() * colors.length)]);

    const draw = () => {
      // Semi-transparent dark background for trail effect
      ctx.fillStyle = 'rgba(10, 15, 30, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Fira Code", "Courier New", monospace`;

      for (let i = 0; i < columns; i++) {
        const line = codeLines[lineIndex[i] % codeLines.length];
        const char = line[charIndex[i] % line.length] || ' ';

        const x = i * (fontSize * 0.7);
        const y = drops[i] * fontSize;

        // Pick color brightness variant for this character
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

        // Move drop down
        drops[i] += speeds[i];
        charIndex[i]++;

        // Reset when off screen — pick a new random color for the column
        if (y > canvas.height + 50) {
          drops[i] = Math.random() * -20;
          lineIndex[i] = Math.floor(Math.random() * codeLines.length);
          charIndex[i] = 0;
          speeds[i] = 0.3 + Math.random() * 0.7;
          colColors[i] = colors[Math.floor(Math.random() * colors.length)];
        }
      }
    };

    // Fill initial background
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
      {/* Animated Code Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Dark Overlay — strong enough to make text pop */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      {/* Bottom gradient for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10"></div>

      {/* Content Block */}
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
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)' }}
          >
            We Build High-Performing Websites &amp; Technical Solutions for Your Business
          </h1>

          <p 
            className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{ textShadow: '0 1px 15px rgba(0,0,0,0.7)' }}
          >
            From custom website development to reliable technical support, we handle the technology so you can focus on growing your business with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#services"
              className="w-full sm:w-auto px-10 py-4 bg-accent text-white rounded-full font-bold text-lg shadow-2xl hover:bg-accent/90 transition-all transform hover:-translate-y-1 hover:shadow-accent/30"
            >
              Explore Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

