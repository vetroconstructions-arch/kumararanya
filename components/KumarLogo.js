'use client';
import React from 'react';

export default function KumarLogo({ size = 42, className = '', style = {} }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ 
        flexShrink: 0,
        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))',
        ...style 
      }}
      aria-label="Kumar Properties Logo"
    >
      {/* Outer Circular Orange Ring with Crisp White Fill */}
      <circle 
        cx="50.5" 
        cy="50" 
        r="44" 
        fill="white" 
        stroke="#EA6C23" 
        strokeWidth="6" 
      />

      {/* Signature Double-Chevron 'K' Symbol in Kumar Orange (#EA6C23) */}
      <path 
        d="M 43 25 L 22 50 L 43 75 L 55 75 L 34 50 L 55 25 Z M 67 25 L 46 50 L 67 75 L 79 75 L 58 50 L 79 25 Z" 
        fill="#EA6C23" 
      />
    </svg>
  );
}
