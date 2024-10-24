import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#343a40" }}>
      <div className="container">
        <h2
          className="text-center mb-3 display-4 font-weight-bold text-white"
          data-aos="fade-right">About Me </h2>

        <div className="row justify-content-center" data-aos="fade-right">
          <div className="col-lg-8 text-center">
            {/* Profile Image Centered Above Text */}
            <img
              src="/shayan.jpg"
              alt="Profile"
              style={{
                width: "200px",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)",
                border: "5px solid #fff",
              }}
              className="img-fluid rounded-circle my-4"
              data-aos="zoom-in"
            />
            <p
              className="text-light py-2"
              style={{ lineHeight: "1.6", fontSize: "18px" }}
              data-aos="fade-right"
            >
              I am a passionate Frontend Developer with a strong foundation in technologies like HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS. 
              With hands-on experience in building responsive, user-friendly web interfaces, I focus on delivering exceptional user experiences.
              Currently pursuing an HDSE at Aptech Metro Star Gate, I am in my second semester, enhancing my skills and diving deeper into web development.
              I am excited to collaborate with dynamic teams, contribute to innovative projects, and grow as a developer committed to best practices.
            </p>

            {/* Hire Me Button */}
            <a
              href="https://wa.me/1234567890" // Replace '1234567890' with your actual phone number
              className="btn btn-outline-light mt-2 "
              style={{
                borderRadius: "30px",
                padding: "10px 30px",
                fontWeight: "bold",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#343a40";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#fff";
              }}
              data-aos="fade-up"
              target="_blank" // Opens WhatsApp in a new tab
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
