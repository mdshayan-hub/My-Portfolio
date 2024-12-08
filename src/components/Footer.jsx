import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-1">

      <div className="container">
        <div className="row pt-2">
          {/* Left Column - Contact Information */}
          <div className="col-lg-4 col-md-6 text-lg-start text-center mb-2 mb-lg-0 pt-lg-0 pt-md-0 pt-3 mx-auto">
            <h5 className="mb-3 fs-3">Contact Information</h5>
            <p>Email: <a href="mailto:shayanjamal142005@gmail.com" className="text-white">shayanjamal142005@gmail.com</a></p>
           <p>Phone: <a href="tel:+923123661133" className="text-white">+92-3123661133</a></p>
            <p>Location: Majeed Colony Sector II, Karachi, Pakistan</p>
            <p>Working Hours: Mon - Sun: 9pm - 6am</p>
          </div>

          {/* Center Column - Additional Info */}
          <div className="col-lg-4 col-md-6 text-lg-start text-center mb-3 mb-lg-0 mx-auto d-none d-lg-block d-md-block">
            <h5 className="mb-3 fs-3">Additional Information</h5>
            <p>Open to: Freelance Projects, Full-Time Roles</p>
            <p>Blog: <a href="#blog" className="text-white">Visit My Blog</a></p>
            <p>Newsletter: <a href="#subscribe" className="text-white">Subscribe for Updates</a></p>
          </div>

          {/* Right Column - Quick Links and Social Media */}
          <div className="col-lg-3  text-lg-center text-center">
 <h5 className=" p-4 fs-3">Connect with Me</h5>
 <div className="d-flex justify-content-lg-center justify-content-center mb-3">
 <a href="https://www.facebook.com/profile.php?id=100093142520212" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
  <i className="fab fa-facebook-f fa-2x"></i>
</a>
   <a href="https://wa.me/923123661133" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
  <i className="fab fa-whatsapp fa-2x"></i>
</a>
<a href="https://www.linkedin.com/in/md-shayan-a79285332/
" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
  <i className="fab fa-linkedin-in fa-2x"></i>
</a>
   <a href="https://github.com/mdshayan-hub" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
     <i className="fab fa-github fa-2x"></i>
   </a>
   <a href="https://www.instagram.com/mdshayan187/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
     <i className="fab fa-instagram fa-2x"></i>
   </a>
 </div>




</div>

<h5 className="mt-2 text-center fs-3">Quick Links</h5>
<div className="d-flex col-lg-12  justify-content-center flex-wrap mt-4">
  <a href="#home" className="text-white mx-2 mb-2 text-decoration-none fs-6">Home</a>
  <a href="#about" className="text-white mx-2 mb-2 text-decoration-none fs-6">About</a>
  <a href="#projects" className="text-white mx-2 mb-2 text-decoration-none fs-6">Projects</a>
  <a href="#contact" className="text-white mx-2 mb-2 text-decoration-none fs-6">Contact</a>
</div>
        </div>




        {/* Footer Bottom */}
        <div className="row ">
          <div className="col-12 ">
            <hr className="bg-secondary mb-3" />
            <p className="text-center small">&copy; 2024 My Portfolio | Designed by <span className="fw-bold text-info">Md Shayan</span></p>
          </div>
        </div>
      </div>
    </footer>
   
  );
}

export default Footer;
