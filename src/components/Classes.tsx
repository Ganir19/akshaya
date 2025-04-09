
import React from "react";

const Classes = () => {
  const danceClasses = [
    {
      id: 1,
      title: "Bharatanatyam",
      level: "All Levels",
      description: "A classical dance form from Tamil Nadu, characterized by precise footwork and expressive storytelling through gestures.",
      image: "https://images.unsplash.com/photo-1635516483049-090d6116c669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      title: "Kathak",
      level: "Beginner to Advanced",
      description: "A rhythmic dance form from North India, featuring intricate footwork, graceful movements and dynamic spins.",
      image: "https://images.unsplash.com/photo-1576074972488-65ca096fc4fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 3,
      title: "Contemporary",
      level: "All Levels",
      description: "A modern style blending elements from various dance forms, focused on expressing emotion through fluid, athletic movements.",
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
    },
    {
      id: 4,
      title: "Odissi",
      level: "Intermediate to Advanced",
      description: "One of the oldest classical dance forms from Odisha, characterized by fluid torso movements and sculpturesque poses.",
      image: "https://images.unsplash.com/photo-1564677349626-e99a1ed5a124?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 5,
      title: "Folk Dance",
      level: "Beginner Friendly",
      description: "A celebration of India's rich cultural heritage through regional folk dances that are lively, vibrant and community-oriented.",
      image: "https://images.unsplash.com/photo-1516280401293-c2a2cd014cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 6,
      title: "Bollywood",
      level: "All Levels",
      description: "A high-energy fusion style combining classical Indian dance with modern Western influences popularized by Indian cinema.",
      image: "https://images.unsplash.com/photo-1533236286820-1862b69c115b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  return (
    <section id="classes" className="section-container bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-title">Our Classes</h2>
        <p className="text-lg text-gray-700">
          Discover the rich diversity of dance forms at Akshaya. From classical traditions to contemporary expressions, our classes cater to all ages and skill levels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {danceClasses.map((danceClass) => (
          <div 
            key={danceClass.id} 
            className="card group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={danceClass.image} 
                alt={danceClass.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-playfair text-xl font-bold text-akshaya-purple">
                  {danceClass.title}
                </h3>
                <span className="bg-akshaya-gold text-akshaya-dark text-xs px-2 py-1 rounded-full">
                  {danceClass.level}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {danceClass.description}
              </p>
              <a 
                href="#contact" 
                className="inline-block font-medium text-akshaya-purple hover:text-akshaya-gold transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a href="#contact" className="btn-primary inline-flex items-center">
          Register for Classes
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
            className="ml-2 h-4 w-4"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Classes;
