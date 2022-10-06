import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import * as Scroll from 'react-scroll';
import { Link as LinkScroll, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
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
          <LinkScroll  to="hero" spy={true} smooth={true} offset={50} duration={50}>
            <li className="home">Home</li>
          </LinkScroll>

          <LinkScroll  to="services" spy={true} smooth={true} offset={50} duration={50}>
          <li className="services">
            Services
          </li>
          </LinkScroll>

          
          <LinkScroll  to="why-us" spy={true} smooth={true} offset={50} duration={50}>
          <li className="about">
            About Us
          </li>
          </LinkScroll>

          <LinkScroll  to="clients" spy={true} smooth={true} offset={50} duration={50}>
          <li className="clients">
             Clients
          </li>
          </LinkScroll>

          <Link  to="/portfolio">
            <li className="portfolio">Portfolio</li>
          </Link>
          <LinkScroll  to="contact" spy={true} smooth={true} offset={50} duration={50}>
          <li className="contact1">
          Contact Us
          </li>
          </LinkScroll>
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

export default Navbar;
