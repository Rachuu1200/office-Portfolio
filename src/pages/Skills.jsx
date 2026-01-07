import React from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../data/profiles";
import "./Skills.css";

const Skills = ({ darkMode }) => {
  const { id } = useParams();
  const profile = profiles[id];

  if (!profile || !profile.skills || profile.skills.length === 0) {
    return <p>No skills available.</p>;
  }

  return (
    <div className={`skills-hero ${darkMode ? "dark" : "light"}`}>
      <div className="skills-content">

        {/* Text Section */}
        <div className="skills-text">
          <h4>What I Do</h4>
          <h1>{profile.name.split(" ")[0]}'s Skills</h1>
          <p>
            Here are some of my core skills and expertise areas.
          </p>
        </div>

        {/* Skills List */}
        <div className="skills-list">
          {profile.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
