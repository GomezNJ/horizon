import React from 'react';

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 800 800" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M400 50c-193.3 0-350 156.7-350 350s156.7 350 350 350 350-156.7 350-350S593.3 50 400 50zm0 650c-165.7 0-300-134.3-300-300s134.3-300 300-300 300 134.3 300 300-134.3 300-300 300z"/>
      <path d="M400 150c-138.1 0-250 111.9-250 250s111.9 250 250 250 250-111.9 250-250S538.1 150 400 150zm0 450c-110.5 0-200-89.5-200-200s89.5-200 200-200 200 89.5 200 200-89.5 200-200 200z"/>
      <circle cx="150" cy="400" r="50"/>
      <circle cx="650" cy="400" r="50"/>
      <circle cx="400" cy="150" r="50"/>
    </svg>
  );
}