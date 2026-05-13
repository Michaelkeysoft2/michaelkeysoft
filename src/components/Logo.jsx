import React from 'react';

const Logo = ({ className = "w-10 h-10", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Thin circle outline - the "base" path */}
      <path 
        d="M20 80 A 40 40 0 1 1 80 80" 
        stroke={color} 
        strokeWidth="2" 
        opacity="0.5"
      />
      
      {/* The thick accent arc - lies ON the circle path, providing that bold branding look */}
      <path 
        d="M20 80 A 40 40 0 0 1 35 40" 
        stroke={color} 
        strokeWidth="10" 
        strokeLinecap="round"
      />
      
      {/* Stylized 'M' - slightly thinner than the arc to ensure the arc "rests" clearly on the path */}
      <path 
        d="M22 78 L42 42 L50 62 L58 42 L78 78" 
        stroke={color} 
        strokeWidth="8" 
        strokeLinejoin="round" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
