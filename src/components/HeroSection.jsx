import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  

  return (
    <section className="hero text-center text-white d-flex align-items-center" id="hero">
      <div className="container">
        <h1 className="display-4" data-aos="fade-right">
          Hello, I'm <span>MD SHAYAN</span>
        </h1>
        <p className="lead" data-aos="fade-right">
          A Front-end Developer Specializing in Beautiful Web Experiences
        </p>
        <a
          href="#projects"
          className="btn btn-outline-info btn-lg mt-4 fw-bold shadow-info" data-aos="fade-right">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
