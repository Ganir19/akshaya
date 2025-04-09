
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-akshaya-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')",
            opacity: 0.7
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 animate-fade-in">
          Express Your <span className="text-akshaya-gold">Soul</span> Through Dance
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
          Discover the art of movement at Akshaya Dance Studio, where tradition meets innovation
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <a href="#classes" className="btn-primary text-lg">
            Explore Classes
          </a>
          <a href="#about" className="btn-secondary text-lg">
            About Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-8 w-8"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
