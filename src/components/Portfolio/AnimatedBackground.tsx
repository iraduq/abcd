import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-drift"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-2xl animate-drift" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-neutral/6 rounded-full blur-xl animate-float-delayed"></div>
      
      {/* Moving geometric shapes */}
      <div className="absolute top-20 right-1/3 w-4 h-4 bg-primary/30 rotate-45 animate-drift"></div>
      <div className="absolute bottom-40 left-1/3 w-6 h-6 bg-accent/40 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-20 w-3 h-12 bg-neutral/25 animate-spin-slow"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 right-1/2 w-2 h-2 bg-primary/60 rounded-full animate-particle"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-accent/50 rounded-full animate-particle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-2.5 h-2.5 bg-neutral/40 rounded-full animate-particle" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/6 left-3/4 w-1 h-1 bg-primary/70 rounded-full animate-particle" style={{ animationDelay: '6s' }}></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/6 left-1/5 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/6 right-1/5 w-24 h-24 bg-gradient-to-l from-accent/8 to-neutral/8 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default AnimatedBackground;