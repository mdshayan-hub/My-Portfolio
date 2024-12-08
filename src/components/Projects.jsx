import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const projects = [
    
    { image: './projects/task manager.jpg', detail: 'View Details', title: 'Task Manager', text: 'Task Manager - Simple and Intuitive Task Management App.', viewProject: 'https://task-manager-omega-nine.vercel.app/', project: 'View Project' },
    { image: './projects/jenson.jpg', detail: 'View Details', title: 'Jenson-Decors', text: '"At Home-Styler, transform your home with Home-Styler. ', viewProject: 'https://jensen-decors-eta.vercel.app', project: 'View Project' },
    { image: './projects/wheater.jpg', detail: 'View Details', title: 'Weather Season', text: 'Weather App - Real-Time Weather Forecasting Weather.', viewProject: 'https://weather-season.vercel.app/', project: 'View Project' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null); // State to track hovered card
  const [cardsToShow, setCardsToShow] = useState(1); // State to manage how many cards to show (1 for mobile, 2 for tablet)

  // Initialize AOS and update based on screen size
  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setCardsToShow(2); // Tablet size
      } else {
        setCardsToShow(1); // Mobile size
      }
    };

    // Set initial cardsToShow based on current screen width
    handleResize();

    // Add event listener for resizing the window
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - cardsToShow + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-section py-5 bg-sky">
      <div className="container">
        <h2 className="text-center text-light mb-3 display-3" data-aos="fade-up">Projects</h2>
        <p className="text-center lead text-light mb-4 py-1  mb-lg-0 mb-md-0" data-aos="fade-up">
          Showcasing my most impactful work.
        </p>

        {/* Slider for mobile and tablet view */}
        <div className="d-block d-md-none text-center position-relative">
          <div className="card-slider shadow rounded-circle bg-white" data-aos="fade-up">
            <div className="row">
              {projects.slice(currentIndex, currentIndex + cardsToShow).map((project, index) => (
                <div
                  key={index}
                  className={`col-${12 / cardsToShow}`}
                  
                  onMouseEnter={() => setHoverIndex(currentIndex + index)} // Track the index based on currentIndex + index
                  onMouseLeave={() => setHoverIndex(null)}>

                  <div className="image-container">
                    <img src={project.image} className="card-img-top" alt={project.title} />
                    <div className={`overlay  fw-bold text-light ${hoverIndex === currentIndex + index ? 'show' : ''}`}>
                      {project.detail}
                    </div>
                  </div>
                  <div className="card-body bg-dark text-white text-center p-3 rounded-pill">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text small">{project.text}</p>
                    <a href={project.viewProject} className="btn btn-outline-light fw-bold" aria-label={project.title} target="_blank" rel="noopener noreferrer">
                      {project.project}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="position-absolute prev-slide">
            <button onClick={prevSlide} className="btn btn-dark border-2 border-light">
              <FaChevronLeft />
            </button>
          </div>
          <div className="position-absolute next-slide">
            <button onClick={nextSlide} className="btn btn-dark border-2 border-light">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Grid for larger screens */}
        <div className="row py-4 mx-lg-4 mx-md-4 d-none d-md-flex">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-8 mb-5 mx-auto"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              data-aos="fade-up">

              <div className="card h-100 shadow border-0 transition-transform rounded-circle">
                <div className="image-container">
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className={`overlay fw-bold text-light ${hoverIndex === index ? 'show' : ''}`}>
                    {project.detail}
                  </div>
                </div>
                <div className="card-body bg-dark text-white text-center rounded-pill">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.text}</p>
                  <a href={project.viewProject} className="btn btn-outline-light fw-bold " aria-label={project.title} target="_blank" rel="noopener noreferrer">
                    {project.project}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;