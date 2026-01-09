import React from "react";
import "./Education.css";

const Education = ({ person, darkMode }) => {
  return (
    <div className={`education ${darkMode ? "dark" : ""}`}>
      
      {/* ===== EDUCATION ===== */}
      <h2 className="edu-title">Education</h2>

      <div className="edu-list">
        {person.education?.map((edu, index) => (
          <div className="edu-card" key={index}>
            <h3>{edu.institute}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="field">{edu.field}</p>
            <span className="year">{edu.year}</span>
          </div>
        ))}
      </div>

      {/* ===== EXPERIENCE ===== */}
      <h2 className="edu-title">Work Experience</h2>

      <div className="exp-list">
        {person.experience?.map((exp, index) => (
          <div className="exp-card" key={index}>
            <h3>{exp.company}</h3>
            <span className="duration">{exp.duration}</span>
            <p className="role">{exp.role}</p>

            <ul>
              {exp.responsibilities?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Education;
