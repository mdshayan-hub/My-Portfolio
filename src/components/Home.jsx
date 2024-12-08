import React from 'react';

const Home = () => {
  return (
    <section id="home" className="vh-100 d-flex flex-column align-items-center justify-content-center bg-primary text-white text-center">
      <div className="animate__animated animate__fadeIn ">
        <h1 className="text-dark display-6 fw-bold mt-5 ">Welcome to <span className="text-light">My Portfolio</span></h1>
        <p className="lead px-4 text-dark fw-bold ">I am a Front-End Developer skilled in <span className="text-light">React.js and Bootstrap</span></p>
        <a href="/MD Shayan.pdf" download className="btn btn-dark shadow-none mt-4 text-info border-5 fw-bold p-2">
          Download CV <i className="fas fa-download"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
