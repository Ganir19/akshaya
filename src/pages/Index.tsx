
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Classes from "../components/Classes";
import Instructors from "../components/Instructors";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Instructors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
