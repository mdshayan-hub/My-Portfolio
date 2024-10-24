import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const educationData = [
    {
      year: '2022 - 2023',
      title: 'Matriculation',
      institution: 'Board of Karachi',
      description:
        'I completed my Matriculation from Pilot Public Secondary School under the Board of Karachi. My education provided me with a strong foundation in subjects like Science, Mathematics, and English, which played a crucial role in shaping my analytical and problem-solving skills. This early academic experience laid the groundwork for my passion in technology and web development.',
    },
    {
      year: '2023 - Present',
      title: 'Intermediate',
      institution: 'Board of Karachi',
      description:
        'I completed my Intermediate studies under the Board of Karachi, further enhancing my knowledge in areas such as Mathematics, Physics, and Computer Science. This phase of my education was instrumental in building the critical thinking and technical skills necessary for my career in web development and software engineering.',
    },
    {
      year: '2024 - Present',
      title: 'Software Engineering',
      institution: 'Aptech Learning',
      description:
        'I am currently pursuing Software Engineering at Aptech Learning, where I am gaining in-depth knowledge of programming, web development, databases, and software design. My education here has equipped me with practical skills in various technologies, preparing me to excel in the ever-evolving field of software development.',
    },
  ];

  const experienceData = [
    {
      year: '2024',
      title: 'Frontend Developer',
      company: 'Aptech Learning',
      description:
        'As a Frontend Developer at Aptech Learning, I have honed my skills in HTML, CSS, JavaScript, and modern frontend frameworks like React. My work involves developing responsive, user-friendly interfaces that enhance the user experience across devices. I focus on clean, efficient code and staying updated with the latest trends and technologies in web development.',
    },
    {
      year: '2024',
      title: 'React.JS Developer',
      company: 'WsCube Tech',
      description:
        'As a React.js Developer at WsCube Tech, I am refining my skills in building interactive web applications. My focus is on creating responsive and user-friendly interfaces using modern frontend technologies. I strive to write clean, efficient code while continuously updating my knowledge of the latest trends in web development and best practices.',
    },
    {
      year: '2022-2023',
      title: 'Graphic Designer & Web Developer',
      company: 'SOSTTI, Karachi',
      description:
        'As a Graphic Designer at SOSTTI, I created visually appealing designs that reflected brand identities, using Adobe Creative Suite. As a Web Developer, I built responsive, user-friendly websites using HTML, CSS, JavaScript, and Bootstrap, ensuring they were optimized for performance and mobile responsiveness.',
    },
  ];

  return (
    <section  className="py-5 px-lg-5 px-md-3 px-2 text-white" style={{ backgroundColor: '#343a40' }}>
      <div className="container-fluid">
        <h2
          className="text-center mb-4 display-4 font-weight-bold text-white "
          data-aos="fade-down"
        >
          My Journey
        </h2>

        <div className="row">
          {/* Education Column */}
          <div  className="col-md-6 col-lg-6 col-12 mb-4 mx-auto" data-aos="fade-down">
            <h3 id="education" className="mb-3 text-center text-info fs-2">Education</h3>
            {educationData.map((education, index) => (
              <div
                key={index}
                className="border p-3 mb-3 border-info bg-dark rounded shadow-lg"
                style={{ overflowWrap: 'break-word', margin: '0' }}
                data-aos="fade-down" // Animate from above
              >
                <h5>{education.year}</h5>
                <p>
                  <strong className="text-info">{education.title}</strong> — {education.institution}
                </p>
                <p>{education.description}</p>
              </div>
            ))}
          </div>

          {/* Experience Column */}
          <div  className="col-md-6 col-lg-6 col-12 mb-4 mx-auto" data-aos="fade-down">
            <h3 id="experience" className="mb-3 text-center text-info fs-2">Experience</h3>
            {experienceData.map((experience, index) => (
              <div
                key={index}
                className="border p-3 mb-3 border-info bg-dark rounded shadow-lg"
                style={{ overflowWrap: 'break-word', margin: '0' }}
                data-aos="fade-down" // Animate from above
              >
                <h5>{experience.year}</h5>
                <p>
                  <strong className="text-info">{experience.title}</strong> — {experience.company}
                </p>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
