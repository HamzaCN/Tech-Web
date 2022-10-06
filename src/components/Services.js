import React from "react";
import "../styles/Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  const cardInfo = [
    {
      title: "UX/UI Specialists",
      description:
        "The louder you scream, the more people hear you; with our Mobile Developers and their extensive knowledge base, your project will be the loudest of the bunch in an ever competitive environment.",
      icon: "fa-solid fa-lightbulb",
    },
    {
      title: "Business Analysts & Product Owners",
      description:
        "The louder you scream, the more people hear you; with our Mobile Developers and their extensive knowledge base, your project will be the loudest of the bunch in an ever competitive environment.",
      icon: "fa-solid fa-chart-line",
    },
    {
      title: "Mobile App Development",
      description:
        "The louder you scream, the more people hear you; with our Mobile Developers and their extensive knowledge base, your project will be the loudest of the bunch in an ever competitive environment.",
      icon: "fa-solid fa-code",
    },
    {
      title: "Front-end & Back-end Development",
      description:
        "The louder you scream, the more people hear you; with our Mobile Developers and their extensive knowledge base, your project will be the loudest of the bunch in an ever competitive environment.",
      icon: "fa-solid fa-laptop-code",
    },
    {
      title: "QA Specialists",
      description:
        "The louder you scream, the more people hear you; with our Mobile Developers and their extensive knowledge base, your project will be the loudest of the bunch in an ever competitive environment.",
      icon: "fa-solid fa-certificate",
    },
    {
      title: "DevOps",
      description:
        "The louder you scream, the more people hear you; with our Mobile Developers and their extensive knowledge base, your project will be the loudest of the bunch in an ever competitive environment.",
      icon: "fa-brands fa-connectdevelop",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="col-sm-6" id="card-col" key={index}>
        <div className="card" data-aos="flip-up">
          <div className="card-body">
            <h5 className="card-title">
              <i className={card.icon} style={{ padding: "10px" }}></i>
              {card.title}
            </h5>
            <p className="card-text">{card.description}</p>
            <Link to="/readmore">
              <a href="#" className="btn btn-outline-secondary">
                Read More
                <i
                  className="fa-solid fa-angles-right"
                  style={{ padding: "5px" }}
                ></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services">
      <div className="container mt-5">
        <h3 className="text-center text-muted" id="heading">
          AGILE SOFTWARE DEVELOPMENT SERVICES
        </h3>
        <p className="text-center text-muted">
          Whether it’s a long-term project, stand-alone project or an extension
          of your in house team of developers, Teravision Technologies can
          provide you with a spectrum of software needs. Bold innovative ideas
          don’t have to be expensive to develop. In an age of globalized
          technological advances expertise can be found across the globe.
        </p>
        <div className="row g-4 mb-5">{cardInfo.map(renderCard)}</div>
      </div>
    </section>
  );
};

export default Services;
