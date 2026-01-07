import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", name: "Home" },     
    { id: "skills", name: "Skills" },
    { id: "portfolio", name: "Portfolio" },
    { id: "about", name: "About" },
    { id: "contact", name: "Contact" },
    { id: "team", name: "Team" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      {/* Logo */}
      <div className="logo" onClick={() => scrollToSection("home")}>
        Sindhuli<span>Bazar.com</span>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`bar ${menuOpen ? "open" : ""}`} />
        <span className={`bar ${menuOpen ? "open" : ""}`} />
        <span className={`bar ${menuOpen ? "open" : ""}`} />
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <span
              className={active === link.id ? "active" : ""}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </span>
          </li>
        ))}

        {/* Theme Toggle */}
        <li className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
