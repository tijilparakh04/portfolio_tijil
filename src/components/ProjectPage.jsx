import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        projects
      </div>
      <div className="project-list">
        <div className="project">
          <p>Presentation Enhancement</p>
          <p>PPT Enhancer</p>
          <p>
            <span>2023</span>
            <a href="https://github.com/tijilparakh04/PBL">
              Github Link
            </a>
          </p>
        </div>
        <div className="project">
          <p>Ecommerce Price comparison tool</p>
          <p>BargainBot</p>
          <p>
            <span>2024</span>
            <a href="https://github.com/tijilparakh04/multiCommerce">
              Github Link
            </a>
          </p>
        </div>
        <div className="project">
          <p>Java App</p>
          <p>Pet Adoption System</p>
          <p>
            <span>2023</span>
            <a href="https://github.com/tijilparakh04/PetAdoptionSystem">
              Github Link
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
