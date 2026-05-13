import React from 'react';

const Logo = ({ className = "w-10 h-10", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Thin circle outline - frames the entire logo and touches M legs at bottom */}
      <path 
        d="M20 80 A 40 40 0 1 1 80 80" 
        stroke={color} 
        strokeWidth="2" 
        opacity="0.6"
      />
      
      {/* The thick "accent line" (arch) on the circle itself, not touching the M legs */}
      <path 
        d="M25 55 A 40 40 0 0 1 45 15" 
        stroke={color} 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      
      {/* Stylized 'M' - centered and sharp */}
      <path 
        d="M25 75 L45 45 L50 60 L55 45 L75 75" 
        stroke={color} 
        strokeWidth="10" 
        strokeLinejoin="round" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
