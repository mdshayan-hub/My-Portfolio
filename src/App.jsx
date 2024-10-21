import React from "react";
import { useEffect } from "react";
import './app.css';
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import MyJourney from "./components/MyJourney";
import Skills from "./components/Skills";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";




function App() {
  // Scroll to sections smoothly
  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target.hash;
      if (target) {
        const section = document.querySelector(target);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          e.preventDefault();
        }
      }
    };
    document.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", handleScroll);
    });
    return () => {
      document.querySelectorAll("a.nav-link").forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  useEffect(() => {
    // Intersection Observer API to trigger animations on scroll
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeIn');
        } else {
          // Optional: To re-trigger animation when scrolling back up
          entry.target.classList.remove('animate__animated', 'animate__fadeIn');
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);


  return (
    <div className="App">



      {/* Home Section */}
      
      <Navbar />
      <Home />
      <HeroSection />
      <About/>
      <Skills/>
      <MyJourney />
      <Projects />
      <Contact />
      <Footer/>

   

   

    

      {/* Footer */}

    </div>
  );
}

export default App;
