import React from 'react';

const Logo = ({ className = "w-10 h-10", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1. The Circle Frame (The Base) */}
      <path 
        d="M20 80 A 40 40 0 1 1 80 80" 
        stroke={color} 
        strokeWidth="2" 
        opacity="0.4"
      />
      
      {/* 2. The Stylized M (Inside the circle) */}
      <path 
        d="M26 74 L44 44 L50 60 L56 44 L74 74" 
        stroke={color} 
        strokeWidth="9" 
        strokeLinejoin="round" 
        strokeLinecap="round"
      />

      {/* 3. The Accent Arc (Resting on the circle perimeter) */}
      {/* It follows the circle path exactly, clearly "covering" the M area from the outside */}
      <path 
        d="M20 80 A 40 40 0 0 1 40 10" 
        stroke={color} 
        strokeWidth="11" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
