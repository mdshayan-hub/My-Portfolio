import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleNameChange = (event) => {
    const inputName = event.target.value;
    const nameRegex = /^[a-zA-Z\s]*$/;

    if (!nameRegex.test(inputName)) {
      setNameError('Name cannot contain numbers or special characters.');
    } else {
      setNameError('');
      setName(inputName);
    }
  };

  const handleMobileChange = (event) => {
    const inputMobile = event.target.value;
    const mobileRegex = /^[0-9]*$/;

    if (!mobileRegex.test(inputMobile)) {
      setMobileError('Mobile number can only contain numbers.');
    } else {
      setMobileError('');
      setMobile(inputMobile);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !mobile || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    if (nameError || mobileError) {
      alert('Please correct the errors before submitting.');
      return;
    }

    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name}%0AEmail: ${email}%0AMobile: ${mobile}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="bg-dark pt-3 pb-5 text-center text-white">
      <div className="my-4 py-lg-4 py-md-4 py-2">
        <h2 className="display-5" data-aos="fade-up">Contact Me</h2>
        <p className="lead" data-aos="fade-up">I would love to hear from you!</p>
      </div>

      <div className="shadow-sm mx-auto bg-sky px-lg-3 py-lg-5" style={{ width: '89%', borderRadius: '21px' }}>
        <div className="container">
          <div className="row py-5 justify-content-center">
            <div className="col-md-10 col-lg-6">
              <form
                className="shadow-lg rounded text-start bg-dark p-3 p-lg-4 py-lg-5 py-sm-5 border border-lg-5 border-md-5 border-3 rounded-5"
                style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}
                onSubmit={handleSubmit}
                data-aos="fade-up"
              >
                <div className="row">
                  <div className="col-md-6 col-6 mb-4 fw-bold">
                    <label htmlFor="name" className="form-label ps-2 fs-6" style={{ color: '#00c6ff' }}>
                      <i className="fas fa-user"></i> Name
                    </label>
                    <input
                      type="text"
                      className="form-control border border-lg-5 border-md-5 border-3 border-info"
                      id="name"
                      placeholder="Enter Your Name"
                      style={{ borderColor: '#ddd' }}
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                    {nameError && <p className="text-danger small mt-3
                    ">{nameError}</p>}
                  </div>

                  <div className="col-md-6 col-6 mb-4 fw-bold">
                    <label htmlFor="email" className="form-label ps-2 fs-6" style={{ color: '#00c6ff' }}>
                      <i className="fas fa-envelope"></i> Email
                    </label>
                    <input
                      type="email"
                      className="form-control border border-lg-5 border-md-5 border-3 border-info"
                      id="email"
                      placeholder="name@example.com"
                      style={{ borderColor: '#ddd', borderRadius: '5px' }}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-6 mb-4 fw-bold">
                    <label htmlFor="mobile" className="form-label ps-2 fs-6" style={{ color: '#00c6ff' }}>
                      <i className="fas fa-phone"></i> Mobile
                    </label>
                    <input
                      type="text"
                      className="form-control border border-lg-5 border-md-5 border-3 border-info"
                      id="mobile"
                      placeholder="Enter Your Mobile Number"
                      style={{ borderColor: '#ddd' }}
                      value={mobile}
                      onChange={handleMobileChange}
                      required
                    />
                    {mobileError && <p className="text-danger small mt-2">{mobileError}</p>}
                  </div>

                  <div className="col-md-6 col-6 mb-4 fw-bold">
                    <label htmlFor="subject" className="form-label ps-2 fs-6" style={{ color: '#00c6ff' }}>
                      <i className="fas fa-tag"></i> Subject
                    </label>
                    <input
                      type="text"
                      className="form-control border border-lg-5 border-md-5 border-3 border-info"
                      id="subject"
                      placeholder="Enter Subject"
                      style={{ borderColor: '#ddd' }}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 fw-bold">
                  <label htmlFor="message" className="form-label ps-2 fs-6" style={{ color: '#00c6ff' }}>
                    <i className="fas fa-comment"></i> Message
                  </label>
                  <textarea
                    className="form-control border border-lg-5 border-md-5 border-3 border-info"
                    id="message"
                    placeholder="Type a message..."
                    rows="4"
                    style={{ borderColor: '#ddd', borderRadius: '5px' }}
                    required
                  ></textarea>
                </div>

                <div className="d-grid justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary py-2 px-5"
                    style={{
                      backgroundColor: '#00c6ff',
                      borderColor: '#00c6ff',
                      color: '#fff',
                      borderRadius: '50px',
                      fontSize: '18px',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 0 15px rgba(0, 198, 255, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start text-start text-white mt-5 mt-lg-0 rounded-5 d-none d-lg-block d-md-none"
              data-aos="fade-up">
              <div className="box-border rounded-5 bg-light p-lg-3 p-2 my-5 mt-5 mx-auto shadow-lg">
                <div className="inner-box bg-dark border border-5 border-info rounded-4 p-5">
                  <div className="d-flex align-items-center mb-4">
                    <i className="fas fa-phone fa-2x bg-dark text-info p-2 rounded-circle me-3"></i>
                    <div>
                      <h4 className="fs-4 mb-1">Phone</h4>
                      <p className="fs-5">+92-3123661133</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <i className="fas fa-map-marker-alt fa-2x bg-dark text-info p-2 rounded-circle me-3"></i>
                    <div>
                      <h4 className="fs-4 mb-1">Location</h4>
                      <p className="fs-5">Majeed Colony Sector II, Karachi, Pakistan</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <i className="fas fa-clock fa-2x bg-dark text-info p-2 rounded-circle me-3"></i>
                    <div>
                      <h4 className="fs-4 mb-1">Working Hours</h4>
                      <p className="fs-5">Mon - Sun: 9pm - 6am</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
