import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name}%0AEmail: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="bg-dark pt-3 pb-5 text-center text-white">
      <div className="my-4 py-5">
        <h2 className="display-5" data-aos="fade-down">Contact Me</h2>
        <p className="lead" data-aos="fade-down">I would love to hear from you!</p>
      </div>

      <div className="shadow-sm mx-auto bg-sky px-lg-3 py-lg-5" style={{ width: '89%', borderRadius: '21px' }}>
        <div className="container">
          <div className="row py-5 justify-content-center">
            <div className="col-md-10 col-lg-6">
              <form className="shadow-lg rounded text-start bg-dark p-3 p-lg-4 py-lg-5 py-sm-5 border border-5 rounded-5"
                style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}
                onSubmit={handleSubmit}
                data-aos="fade-right">
                <div className="mb-4 fw-bold">
                  <label htmlFor="name" className="form-label ps-2 fs-5" style={{ color: '#00c6ff' }}>
                    <i className="fas fa-user"></i> Name
                  </label>
                  <input
                    type="text"
                    className="form-control border border-5 border-info"
                    id="name"
                    placeholder="Enter Your Name"
                    style={{ borderColor: '#ddd' }}
                    required
                  />
                </div>
                <div className="mb-4 fw-bold fs-6">
                  <label
                    htmlFor="email"
                    className="form-label ps-2 fs-5"
                    style={{ color: '#00c6ff' }}
                  >
                    <i className="fas fa-envelope"></i> Email
                  </label>
                  <input
                    type="email"
                    className="form-control border border-5 border-info"
                    id="email"
                    placeholder="name@example.com"
                    style={{ borderColor: '#ddd', borderRadius: '5px' }}
                    required
                  />
                </div>
                <div className="mb-4 fw-bold fs-6">
                  <label
                    htmlFor="message"
                    className="form-label ps-2 fs-5"
                    style={{ color: '#00c6ff' }}
                  >
                    <i className="fas fa-comment"></i> Message
                  </label>
                  <textarea
                    className="form-control border border-5 border-info"
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

            {/* Additional Details */}
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start text-start text-white mt-5 mt-lg-0 rounded-5 d-none d-lg-block d-md-none"
              data-aos="fade-left">
              <div className="box-border rounded-5 bg-light p-lg-3 p-2 my-5 mt-5 mx-auto shadow-lg">
                <div className="inner-box bg-dark border border-5 border-info rounded-4 p-5">
                  <div className="d-flex align-items-center mb-4">
                    <i className="fas fa-phone fa-2x bg-dark text-info p-2 rounded-circle me-3"></i>
                    <div>
                      <h4 className="fs-4 mb-1">Phone</h4>
                      <p className="fs-5">+1 234 567 890</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <i className="fas fa-map-marker-alt fa-2x bg-dark text-info p-2 rounded-circle me-3"></i>
                    <div>
                      <h4 className="fs-4 mb-1">Location</h4>
                      <p className="fs-5">123 Street Name, City, Country</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <i className="fas fa-clock fa-2x bg-dark text-info p-2 rounded-circle me-3"></i>
                    <div>
                      <h4 className="fs-4 mb-1">Working Hours</h4>
                      <p className="fs-5">Mon - Fri: 9am - 6pm</p>
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
