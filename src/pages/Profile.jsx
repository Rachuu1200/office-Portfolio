import React, { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { profiles } from "../data/profiles";

import Skills from "./Skills";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

import "./Profile.css";

const Profile = () => {
  const { darkMode } = useOutletContext();
  const { id } = useParams();

  const person = profiles?.[id];

  const [roleIndex, setRoleIndex] = useState(0);

  // Animate roles
  useEffect(() => {
    if (!person?.roles?.length) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % person.roles.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [person]);

  if (!person) return <h2 style={{ padding: "2rem" }}>Profile Not Found</h2>;

  // Smooth scroll handler for navbar
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= HERO / PROFILE ================= */}
      <section id="home" className={`hero ${darkMode ? "dark" : ""}`}>
        <div className="hero-content">
          <div className="text">
            <h4>Hello, I'm</h4>
            <h1>{person.name}</h1>
            <h2 className="animated-text">
              And I'm a <span>{person.roles[roleIndex]}</span>
            </h2>
            <p>{person.description}</p>

            {person.cv && (
              <a href={person.cv} download>
                <button className="btn">Download CV</button>
              </a>
            )}
          </div>

          <div className="image-wrapper">
            <div className="glow"></div>
            <img src={person.image} alt={person.name} />
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills">
        <Skills person={person} darkMode={darkMode} />
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio">
        <Portfolio person={person} darkMode={darkMode} />
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about">
        <About person={person} darkMode={darkMode} />
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact">
        <Contact person={person} darkMode={darkMode} />
      </section>
    </>
  );
};

export default Profile;
