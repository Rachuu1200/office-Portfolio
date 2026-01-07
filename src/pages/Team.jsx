import React from "react";
import { Link } from "react-router-dom";
import { profiles } from "../data/profiles";
import "./Team.css";

const Team = () => {
  // Separate CEO
  const ceo = profiles.kumar;

  // Other team members (excluding CEO)
  const teamMembers = Object.entries(profiles).filter(
    ([key]) => key !== "kumar"
  );

  return (
    <div className="team-section">
      {/* Headline */}
      <h1 className="team-heading">
        Meet Our Creative Team at NLT Production Office
      </h1>

      {/* CEO Section */}
      {ceo && (
  <div className="ceo-section">
    <h2 className="ceo-title">Founder & CEO</h2>

    <Link to="/kumar" className="ceo-card">
      <div className="ceo-image-wrapper">
        <img
          src={ceo.image}
          alt={ceo.name}
          onError={(e) => (e.target.src = "/default-avatar.png")}
        />
      </div>

      <div className="ceo-info">
        <h3>{ceo.name}</h3>
        <span className="ceo-badge">Chief Executive Officer</span>
        <p>{ceo.roles?.join(" • ")}</p>
      </div>
    </Link>
  </div>
)}

      {/* Team Cards */}
      <div className="team-container">
        {teamMembers.map(([key, member]) => (
          <Link key={key} to={`/${key}`} className="team-card">
            <img
              src={member.image}
              alt={member.name}
              onError={(e) => (e.target.src = "/default-avatar.png")}
            />
            <h3>{member.name}</h3>
            <p>{member.roles?.[0] || "Team Member"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Team;
