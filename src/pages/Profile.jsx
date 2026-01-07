import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../data/profiles";
import "./Profile.css";

const Profile = ({ darkMode }) => {
  const { id } = useParams();
  const person = profiles?.[id]; // ✅ SAFE ACCESS

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!person || !Array.isArray(person.roles)) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % person.roles.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [person]);

  // ✅ GUARD RENDER
  if (!person) {
    return <h2 style={{ padding: "2rem" }}>Profile Not Found</h2>;
  }

  return (
    <div className={`hero ${darkMode ? "dark" : ""}`}>
      <div className="hero-content">
        <div className="text">
          <h4>Hello, I'm</h4>
          <h1>{person.name}</h1>

          {Array.isArray(person.roles) && person.roles.length > 0 && (
            <h2 className="animated-text">
              And I'm a <span>{person.roles[index]}</span>
            </h2>
          )}

          {person.description && <p>{person.description}</p>}

          <a href={person.cv} download>
            <button className="btn">Download CV</button>
          </a>
        </div>

        <div className="image-wrapper">
          <div className="glow"></div>
          <img src={person.image} alt={person.name} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
