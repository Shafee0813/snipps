import React, { ReactNode } from 'react'

interface GridBackgroundWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function GridBackgroundWrapper({ children, className = '' }: GridBackgroundWrapperProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #2c2c2c 1px, transparent 1px),
            linear-gradient(to bottom, #2c2c2c 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(circle, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 80%)'
        }}
      />
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: 'radial-gradient(circle, rgba(9,9,9,0) 0%, rgba(0,0,0,0.9) 80%, rgba(0,0,0,1) 100%)'
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

