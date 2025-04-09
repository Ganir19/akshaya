
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Classes", href: "#classes" },
    { title: "Instructors", href: "#instructors" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className={`font-playfair text-2xl font-bold ${isScrolled ? 'text-akshaya-purple' : 'text-white'}`}>
            Akshaya
          </span>
          <span className={`font-playfair text-xl ${isScrolled ? 'text-akshaya-gold' : 'text-akshaya-gold'} ml-1`}>
            Dance Studio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-akshaya-gold ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.title}
            </a>
          ))}
          <a href="#contact" className="btn-primary">
            Join Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-akshaya-purple' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-akshaya-purple' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-700 hover:text-akshaya-purple font-medium"
                onClick={toggleMenu}
              >
                {link.title}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-center" onClick={toggleMenu}>
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
