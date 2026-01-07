import React from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../data/profiles";
import "./Portfolio.css";

const Portfolio = ({ darkMode }) => {
  const { id } = useParams();
  const person = profiles?.[id];

  if (!person || !Array.isArray(person.portfolio)) {
    return <h2 style={{ padding: "2rem" }}>No projects yet.</h2>;
  }

  return (
    <section className={`portfolio-section ${darkMode ? "dark" : ""}`}>
      <div className="portfolio-container">
        <h1>My Portfolio</h1>
        <p className="portfolio-subtitle">
          Some of my recent works and creative projects
        </p>

        <div className="portfolio-grid">
          {person.portfolio.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
