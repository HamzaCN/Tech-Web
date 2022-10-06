import React from "react";
// import ParticlesBackground from "./ParticlesBackground";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
        {/* <ParticlesBackground /> */}
        <div className="content" data-aos="fade-right">
          <h1 className="text-white text-center">Welcome to IT Company</h1>
          <p className="text-white text-center">
            Nearshore software outsourcing that just makes sense.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
