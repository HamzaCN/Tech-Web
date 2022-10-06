import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Why from "../../components/Why";
import About from "../../components/About";
import Clients from "../../components/Clients";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Why />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
