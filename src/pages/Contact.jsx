import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { profiles } from "../data/profiles";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const { darkMode } = useOutletContext();
  const { id } = useParams();
  const profile = profiles[id];

  if (!profile || !profile.contact) return <p>Contact info not available.</p>;

  const { location, email, social } = profile.contact;

  return (
    <div className={`contact-hero ${darkMode ? "dark" : "light"}`}>
      <div className="contact-content">
        <h4>Get in Touch</h4>
        <h1>Contact {profile.name.split(" ")[0]}</h1>

        <p>
          Whether you have a project in mind, want to collaborate, or just want
          to say hi, feel free to drop a message.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-details">
          <p>📍 {location}</p>
          <p>✉️ {email}</p>

          <div className="social-icons">
  {social?.github && (
    <a
      href={social.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <Github size={20} />
    </a>
  )}

  {social?.linkedin && (
    <a
      href={social.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <Linkedin size={20} />
    </a>
  )}

  {social?.instagram && (
    <a
      href={social.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <Instagram size={20} />
    </a>
  )}

  {social?.email && (
    <a href={social.email} aria-label="Email">
      <Mail size={20} />
    </a>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
