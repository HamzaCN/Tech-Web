import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <section>
      <footer id="footer">
        <div className="footer-top mt-4">
          <div className="container">
            <div className="row" data-aos="fade-right">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>IT Company</h3>
                <p>
                  A108 Adam Street <br></br>
                  New York, NY 535022<br></br>
                  United States <br></br>
                  <strong>Phone:</strong> +1 5589 55488 55<br></br>
                  <strong>Email:</strong> info@example.com<br></br>
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p id="footer-p">
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="fa-brands fa-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>P2G</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
