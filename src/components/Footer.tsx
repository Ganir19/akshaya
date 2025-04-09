
import React from "react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-akshaya-dark text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-white">
              <span className="text-white">Akshaya</span>
              <span className="text-akshaya-gold"> Dance Studio</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Where passion meets precision and tradition embraces innovation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-akshaya-purple flex items-center justify-center hover:bg-akshaya-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-akshaya-purple flex items-center justify-center hover:bg-akshaya-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-akshaya-purple flex items-center justify-center hover:bg-akshaya-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-akshaya-purple flex items-center justify-center hover:bg-akshaya-gold transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-akshaya-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-akshaya-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#classes" className="text-gray-300 hover:text-akshaya-gold transition-colors">Classes</a>
              </li>
              <li>
                <a href="#instructors" className="text-gray-300 hover:text-akshaya-gold transition-colors">Instructors</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-akshaya-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Dance Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-akshaya-gold transition-colors">Bharatanatyam</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-akshaya-gold transition-colors">Kathak</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-akshaya-gold transition-colors">Contemporary</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-akshaya-gold transition-colors">Odissi</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-akshaya-gold transition-colors">Folk & Bollywood</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Get Updates</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on classes, performances, and events.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-akshaya-dark border border-gray-600 rounded-l-md focus:ring-akshaya-gold focus:border-akshaya-gold text-white flex-1"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-akshaya-gold text-akshaya-dark font-medium rounded-r-md hover:bg-yellow-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Akshaya Dance Studio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-akshaya-gold text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-akshaya-gold text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-akshaya-gold text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
