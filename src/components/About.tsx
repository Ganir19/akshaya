
import React from "react";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-title">Our Story</h2>
          <p className="mb-6 text-lg">
            Founded in 2010, Akshaya Dance Studio has established itself as a premier institution for classical and contemporary dance forms. Our name "Akshaya" symbolizes the eternal nature of art that never diminishes.
          </p>
          <p className="mb-6 text-lg">
            At Akshaya, we believe dance is more than movement—it's a profound expression of culture, emotion, and spirituality. Our instructors bring decades of expertise and passion, guiding students of all ages and abilities.
          </p>
          <p className="mb-6 text-lg">
            Whether you're taking your first dance steps or refining advanced techniques, Akshaya provides a supportive and inspiring environment where artistry flourishes and connections deepen.
          </p>
          <div className="mt-8">
            <a href="#classes" className="btn-primary mr-4">
              Our Classes
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
              alt="Dance studio" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 w-32 h-32 rounded-lg bg-akshaya-purple"></div>
          <div className="absolute -top-5 -right-5 w-32 h-32 rounded-lg bg-akshaya-gold"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        <div className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-md transition-all">
          <div className="w-16 h-16 bg-akshaya-purple rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <circle cx="12" cy="5" r="3"></circle>
              <line x1="12" y1="8" x2="12" y2="21"></line>
              <line x1="8" y1="16" x2="16" y2="16"></line>
            </svg>
          </div>
          <h3 className="font-playfair text-xl font-bold mb-2">Expert Instruction</h3>
          <p>Learn from professionally trained dancers with years of teaching experience and performance expertise.</p>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-md transition-all">
          <div className="w-16 h-16 bg-akshaya-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-akshaya-dark">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
              <line x1="15" y1="3" x2="15" y2="21"></line>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="3" y1="15" x2="21" y2="15"></line>
            </svg>
          </div>
          <h3 className="font-playfair text-xl font-bold mb-2">Modern Facilities</h3>
          <p>Dance in spacious studios with professional flooring, mirrors, and sound systems designed for optimal learning.</p>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-md transition-all">
          <div className="w-16 h-16 bg-akshaya-purple rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14Z"></path>
              <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
          </div>
          <h3 className="font-playfair text-xl font-bold mb-2">Inclusive Community</h3>
          <p>Join a supportive community where dancers of all levels and backgrounds come together to celebrate the art of movement.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
