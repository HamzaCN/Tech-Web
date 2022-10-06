import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbarx = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "container1 container1-bg" : "container1"}>
      <nav className="navbar1">
        <h3 className="logo">Logo</h3>

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links1"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/">
            <li className="return_btn">
              <button >Return to Home</button>
            </li>
          </Link>

        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbarx;
