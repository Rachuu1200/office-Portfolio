import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id } = useParams();

  const links = id
    ? [
        { path: `/${id}`, name: "Profile" },
        { path: `/${id}/skills`, name: "Skills" },
        { path: `/${id}/portfolio`, name: "Portfolio" },
        { path: `/${id}/about`, name: "About" },
        { path: `/${id}/contact`, name: "Contact" },
      ]
    : [{ path: "/", name: "Team" }];

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      {/* Logo */}
      <NavLink to={id ? `/${id}` : "/"} className="logo">
        Rachana<span>Mandal</span>
      </NavLink>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`bar ${menuOpen ? "open" : ""}`} />
        <span className={`bar ${menuOpen ? "open" : ""}`} />
        <span className={`bar ${menuOpen ? "open" : ""}`} />
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        {links.map((link, i) => (
          <li key={i} onClick={() => setMenuOpen(false)}>
            <NavLink
              to={link.path}
              end={link.name === "Home"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.name}
            </NavLink>
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
