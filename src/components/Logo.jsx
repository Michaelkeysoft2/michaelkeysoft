import React from 'react';

const Logo = ({ className = "w-10 h-10", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Partial arc - starts at the left leg and sweeps over to the right side */}
      <path 
        d="M20 80 A 42 42 0 1 1 85 65" 
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
