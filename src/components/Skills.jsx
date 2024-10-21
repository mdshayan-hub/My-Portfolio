import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="skills" className="skill py-5 bg-sky">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 display-5 text-light" data-aos="fade-right">
          My Skills
        </h2>
        <div className="row g-4 justify-content-center py-5">
          {/* Skill Cards */}
          {[
            { title: 'HTML', iconClass: 'fab fa-html5', color: 'text-danger', progress: '90%', bgColor: 'bg-danger' },
            { title: 'CSS', iconClass: 'fab fa-css3-alt', color: 'text-primary', progress: '85%', bgColor: 'bg-primary' },
            { title: 'JavaScript', iconClass: 'fab fa-js-square', color: 'text-warning', progress: '80%', bgColor: 'bg-warning' },
            { title: 'Bootstrap', iconClass: 'fab fa-bootstrap', color: 'text-primary', progress: '90%', bgColor: 'bg-primary' },
            { title: 'jQuery', iconClass: 'fa-solid fa-link', color: 'text-danger', progress: '70%', bgColor: 'bg-danger' },
            { title: 'React.js', iconClass: 'fab fa-react', color: 'text-info', progress: '75%', bgColor: 'bg-info' },
            { title: 'Tailwind CSS', iconClass: 'fab fa-css3', color: 'text-blue', progress: '75%', bgColor: 'bg-primary' },
            { title: 'Git & GitHub', iconClass: 'fa-brands fa-github', color: 'text-light', progress: '80%', bgColor: 'bg-secondary' },
            { title: 'JSON', iconClass: 'fas fa-code', color: 'text-warning', progress: '85%', bgColor: 'bg-warning' }
          ].map((skill, index) => (
            <div key={index} className="col-6 col-sm-6 col-lg-4" data-aos="fade-up">
              <div className="card bg-dark text-light h-100 border border-light border-5 rounded-3 shadow-lg">
                <div className="card-body text-center py-4">
                  <h5 className="card-title mb-4">{skill.title}</h5>
                  <i className={`${skill.iconClass} fs-1 ${skill.color}`}></i>
                  <div className="progress mt-4" style={{ height: '20px', width: '100%' }}>
                    <div
                      className={`progress-bar ${skill.bgColor}`}
                      role="progressbar"
                      style={{ width: skill.progress }}
                      aria-valuenow={parseInt(skill.progress, 10)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.progress}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
