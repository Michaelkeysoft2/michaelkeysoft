import React from 'react';

const Logo = ({ className = "w-10 h-10", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Thinner outer circle */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke={color} 
        strokeWidth="2" 
        opacity="0.3"
      />
      
      {/* Thick accent arc (from approx 210deg to 30deg) */}
      <path 
        d="M27.5 82.5 A 45 45 0 1 1 82.5 27.5" 
        stroke={color} 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      
      {/* Stylized 'M' */}
      <path 
        d="M30 80 L50 40 L60 60 L70 40 L90 80" 
        stroke={color} 
        strokeWidth="6" 
        strokeLinejoin="round" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
