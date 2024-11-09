import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>education</p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Bachelor of Technology - Computer Science</p>
          <p>Symbiosis Institute of Technology</p>
          <p>
            <span>2022-2026 - 8.85 GPA</span>
            <a href="/">
              <LocationOnIcon />
              Pune, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Senior Secondary Education</p>
          <p>Hillwoods Academy</p>
          <p>
            <span>2022 - 98%</span>
            <a href="/">
              <LocationOnIcon />
              Delhi, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Secondary Education</p>
          <p>Hillwoods Academy</p>
          <p>
            <span>2020 - 98.6%</span>
            <a href="/">
              <LocationOnIcon />
              Delhi, India
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
