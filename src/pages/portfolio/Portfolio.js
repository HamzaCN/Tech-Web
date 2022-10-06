import React from "react";
import Navbarx from "../../components/Navbarx";
import Footer from "../../components/Footer";
import PortfolioHeader from "../../components/PortfolioHeader";
import PortfolioCard from "../../components/PortfolioCard";

const Portfolio = () => {
  return (
    <div>
      <Navbarx />
      <PortfolioHeader />
      <PortfolioCard />
      <Footer />
    </div>
  );
};

export default Portfolio;
