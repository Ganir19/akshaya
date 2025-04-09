
import React from "react";
import { Instagram, Facebook, Globe } from "lucide-react";

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Bharatanatyam & Kathak",
      bio: "With over 15 years of experience, Priya brings classical traditions to life with her passionate teaching approach.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      social: {
        instagram: "#",
        facebook: "#",
        website: "#"
      }
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "Contemporary & Modern",
      bio: "A celebrated choreographer who has performed internationally, Rahul specializes in contemporary movement and improvisation.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      social: {
        instagram: "#",
        facebook: "#",
        website: "#"
      }
    },
    {
      id: 3,
      name: "Leela Patel",
      role: "Odissi & Folk Dance",
      bio: "Trained under renowned gurus, Leela brings the intricate techniques of Odissi and regional folk dances to Akshaya.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      social: {
        instagram: "#",
        facebook: "#",
        website: "#"
      }
    },
    {
      id: 4,
      name: "Arjun Singh",
      role: "Bollywood & Fusion",
      bio: "A dynamic performer with a background in film choreography, Arjun leads our popular Bollywood and fusion dance programs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      social: {
        instagram: "#",
        facebook: "#",
        website: "#"
      }
    }
  ];

  return (
    <section id="instructors" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-title">Our Instructors</h2>
        <p className="text-lg text-gray-700">
          Meet our passionate team of professional instructors who bring expertise, creativity and dedication to every class.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="card overflow-visible group">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-akshaya-purple/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <div className="flex space-x-3 mb-4">
                  <a 
                    href={instructor.social.instagram} 
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-akshaya-gold transition-colors"
                    aria-label={`${instructor.name}'s Instagram`}
                  >
                    <Instagram size={16} className="text-akshaya-purple" />
                  </a>
                  <a 
                    href={instructor.social.facebook} 
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-akshaya-gold transition-colors"
                    aria-label={`${instructor.name}'s Facebook`}
                  >
                    <Facebook size={16} className="text-akshaya-purple" />
                  </a>
                  <a 
                    href={instructor.social.website} 
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-akshaya-gold transition-colors"
                    aria-label={`${instructor.name}'s Website`}
                  >
                    <Globe size={16} className="text-akshaya-purple" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-bold mb-1 text-akshaya-purple">
                {instructor.name}
              </h3>
              <p className="text-akshaya-gold font-medium mb-3">
                {instructor.role}
              </p>
              <p className="text-gray-600">
                {instructor.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
