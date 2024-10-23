
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOffcanvasDropdownOpen, setIsOffcanvasDropdownOpen] = useState(false);

  const handleDropdownOpen = () => setIsDropdownOpen(true);
  const handleDropdownClose = () => setIsDropdownOpen(false);

  const handleOffcanvasDropdownOpen = () => setIsOffcanvasDropdownOpen(true);
  const handleOffcanvasDropdownClose = () => setIsOffcanvasDropdownOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 pb-3 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="#home" style={{ color: "#00c6ff" }}>MD SHAYAN</a>
          <button
            className="navbar-toggler pt-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span><i className="fa-solid fa-bars fs-1"></i></span>
          </button>
          <div className="collapse navbar-collapse d-none d-lg-flex">
            <ul className="navbar-nav ms-auto px-5 fs-4">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#home" style={{ color: "#ddd" }} onMouseOver={(e) => e.target.style.color = "#00c6ff"} onMouseOut={(e) => e.target.style.color = "#ddd"}>Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#about" style={{ color: "#ddd" }} onMouseOver={(e) => e.target.style.color = "#00c6ff"} onMouseOut={(e) => e.target.style.color = "#ddd"}>About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#skills" style={{ color: "#ddd" }} onMouseOver={(e) => e.target.style.color = "#00c6ff"} onMouseOut={(e) => e.target.style.color = "#ddd"}>Skills</a>
              </li>

              {/* Dropdown Menu for Journey */}
              <li className="nav-item dropdown mx-2" onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose}>
                <a className="nav-link dropdown-toggle" href="#journey" id="journeyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={isDropdownOpen} style={{ color: "#ddd" }}>
                  Journey
                </a>
                <ul className={`dropdown-menu bg-dark ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="journeyDropdown">
                  <li>
                    <a className="dropdown-item bg-dark" href="#education" style={{ color: "#ddd" }}
                      onMouseOver={(e) => {
                        e.target.style.color = "#00c6ff";
                        e.target.style.backgroundColor = "#343a40";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = "#ddd";
                        e.target.style.backgroundColor = "#000";
                      }}>
                      Education
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item bg-dark" href="#experience" style={{ color: "#ddd" }}
                      onMouseOver={(e) => {
                        e.target.style.color = "#00c6ff";
                        e.target.style.backgroundColor = "#343a40";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = "#ddd";
                      }}>
                      Experience
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link" href="#projects" style={{ color: "#ddd" }} onMouseOver={(e) => e.target.style.color = "#00c6ff"} onMouseOut={(e) => e.target.style.color = "#ddd"}>Projects</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact" style={{ color: "#ddd" }} onMouseOver={(e) => e.target.style.color = "#00c6ff"} onMouseOut={(e) => e.target.style.color = "#ddd"}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas menu */}
      <div className="offcanvas offcanvas-start canvas-none bg-dark d-lg-none" tabIndex="-1" data-bs-scroll="true" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbarLabel2">
        <div className="offcanvas-header">
          <a className="navbar-brand fw-bold fs-4" href="#home" style={{ color: "#00c6ff" }}>MD SHAYAN</a>
          <button
            type="button"
            className="btn-close btn-close-white px-3 fs-5 text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr className="text-white mt-1" />
        <div className="offcanvas-body fs-4">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home" data-bs-dismiss="offcanvas"
                style={{ color: "#ddd" }}
                onMouseOver={(e) => e.target.style.color = "#00c6ff"}
                onMouseOut={(e) => e.target.style.color = "#ddd"}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" data-bs-dismiss="offcanvas"
                style={{ color: "#ddd" }}
                onMouseOver={(e) => e.target.style.color = "#00c6ff"}
                onMouseOut={(e) => e.target.style.color = "#ddd"}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" data-bs-dismiss="offcanvas"
                style={{ color: "#ddd" }}
                onMouseOver={(e) => e.target.style.color = "#00c6ff"}
                onMouseOut={(e) => e.target.style.color = "#ddd"}>
                Skills
              </a>
            </li>

            {/* Dropdown Menu for Journey in Offcanvas */}
            <li className="nav-item dropdown" onMouseEnter={handleOffcanvasDropdownOpen} onMouseLeave={handleOffcanvasDropdownClose}>
              <a className="nav-link dropdown-toggle" href="#journey" id="offcanvasJourneyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={isOffcanvasDropdownOpen} style={{ color: "#ddd" }}>
                Journey
              </a>
              <ul className={`dropdown-menu w-25 bg-dark ${isOffcanvasDropdownOpen ? 'show' : ''}`} aria-labelledby="offcanvasJourneyDropdown">
                <li>
                  <a className="dropdown-item bg-dark" href="#education" 
                    style={{ color: "#ddd"}}
                    onMouseOver={(e) => {
                      e.target.style.color = "#00c6ff";
                      e.target.style.backgroundColor = "#343a40";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#ddd";
                      e.target.style.backgroundColor = "#000";
                    }}>
                    Education
                  </a>
                </li>
                <li>
                  <a className="dropdown-item bg-dark" href="#experience" 
                    style={{ color: "#ddd"}}
                    onMouseOver={(e) => {
                      e.target.style.color = "#00c6ff";
                      e.target.style.backgroundColor = "#343a40";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#ddd";
                    }}>
                    Experience
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects" data-bs-dismiss="offcanvas"
                style={{ color: "#ddd" }}
                onMouseOver={(e) => e.target.style.color = "#00c6ff"}
                onMouseOut={(e) => e.target.style.color = "#ddd"}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" data-bs-dismiss="offcanvas"
                style={{ color: "#ddd" }}
                onMouseOver={(e) => e.target.style.color = "#00c6ff"}
                onMouseOut={(e) => e.target.style.color = "#ddd"}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
