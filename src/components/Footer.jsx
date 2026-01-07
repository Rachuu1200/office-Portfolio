import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { profiles } from "../data/profiles";
import "./Footer.css";

const Footer = ({ darkMode }) => {
  const { id } = useParams();
  const person = profiles[id];

  if (!person) return null;

  const firstName = person.name.split(" ")[0];
  const lastName = person.name.split(" ")[1] || "";

  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col brand">
          <h2>
            {firstName}
            <span>{lastName}</span>
          </h2>
          <p>{person.about[0]}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to={`/${id}`}>Home</NavLink></li>
            <li><NavLink to={`/${id}/about`}>About</NavLink></li>
            <li><NavLink to={`/${id}/skills`}>Skills</NavLink></li>
            <li><NavLink to={`/${id}/portfolio`}>Portfolio</NavLink></li>
            <li><NavLink to={`/${id}/contact`}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {person.skills.slice(0, 5).map((skill, i) => (
              <li key={i}>{skill.name}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="contact-info">
            <li>📍 {person.contact.location}</li>
            <li>✉️ {person.contact.email}</li>
          </ul>

          <div className="social-icons">
            <a href={person.contact.social.github}>🐙</a>
            <a href={person.contact.social.linkedin}>💼</a>
            <a href={person.contact.social.instagram}>📸</a>
            <a href={person.contact.social.email}>✉️</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {person.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
