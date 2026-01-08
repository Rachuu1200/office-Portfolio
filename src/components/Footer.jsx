import React from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../data/profiles";
import "./Footer.css";

const Footer = ({ darkMode }) => {
  const { id } = useParams();
  const person = profiles[id];

  if (!person) return null;

  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      {/* ================= Footer Container ================= */}
    <div className="footer-container">
  {/* Brand / About */}
  <div className="footer-col brand">
    <h2>{person.name.replace(" " , " ")}</h2>
    <p>Hello! I'm {person.name}, team member of NLT Productions</p>
  </div>

  {/* Row for links/services/contact */}
  <div className="footer-row">
    {/* Quick Links */}
    <div className="footer-col quick-links">
      <h4>Quick Links</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* Services */}
    <div className="footer-col services">
      <h4>Services</h4>
      <ul>
        {person.skills && person.skills.length > 0
          ? person.skills.map((skill, idx) => <li key={idx}>{skill.name}</li>)
          : <li>No Skills</li>
        }
      </ul>
    </div>

    {/* Contact */}
    <div className="footer-col contact">
      <h4>Contact</h4>
      <ul>
        <li>📍 Location</li>
        <li>✉️ Email</li>
      </ul>
    </div>
  </div>
</div>


      {/* ================= Footer Bottom ================= */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {person.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
