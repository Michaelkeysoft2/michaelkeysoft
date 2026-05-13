import React from 'react';

const Logo = ({ className = "w-10 h-10", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Thin circle outline - touches both legs of the M at the bottom */}
      <path 
        d="M20 80 A 40 40 0 1 1 80 80" 
        stroke={color} 
        strokeWidth="2" 
        opacity="0.6"
      />
      
      {/* The thick "accent line" (arch) on the left side */}
      <path 
        d="M20 80 A 40 40 0 0 1 30 45" 
        stroke={color} 
        strokeWidth="10" 
        strokeLinecap="round"
      />
      
      {/* Stylized 'M' */}
      <path 
        d="M20 80 L40 40 L50 60 L60 40 L80 80" 
        stroke={color} 
        strokeWidth="10" 
        strokeLinejoin="round" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
