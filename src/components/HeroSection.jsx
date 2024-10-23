import React, { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const sectionRef = useRef(null); // Create a ref for the section
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible to true when the section is in view
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up on unmount
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef} // Attach the ref to the section
      className="hero text-center text-white d-flex align-items-center animate-on-scroll"
      id="hero"
    >
      <div className="container">
        <h1
          className={`display-4 ${
            isVisible ? 'animate__animated animate__fadeInRight' : ''
          }`}
        >
          Hello, I'm <span>MD SHAYAN</span>
        </h1>
        <p
          className={`lead ${
            isVisible ? 'animate__animated animate__fadeInRight animate__delay-1s' : ''
          }`}
        >
          A Front-end Developer Specializing in Beautiful Web Experiences
        </p>
        <a
          href="#projects"
          className={`btn btn-outline-light btn-lg mt-4 ${
            isVisible ? 'animate__animated animate__fadeInRight animate__delay-2s' : ''
          }`}
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
