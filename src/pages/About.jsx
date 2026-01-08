import React from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../data/profiles";
import "./About.css";

const About = ({ darkMode }) => {
  const { id } = useParams();
  const person = profiles[id];

  if (!person) return <h2 style={{ padding: "2rem" }}>Profile Not Found</h2>;

  return (
    <section className={`about-section ${darkMode ? "dark" : ""}`}>
      <div className="about-container">
        {/* Text */}
        <div className="about-text">
          <h1>
            About <br />
            {person.name}
          </h1>

          {person.about?.map((text, i) => (
            <p key={i}>{text}</p>
          ))}

          <div className="about-buttons">
            <button className="btn">See Projects</button>
            <button className="btn">Contact Me</button>
          </div>
        </div>

        {/* Image */}
        <div className="about-image">
          <div className="image-glow"></div>
          <img src={person.image} alt={person.name} />
        </div>
      </div>
    </section>
  );
};

export default About;
