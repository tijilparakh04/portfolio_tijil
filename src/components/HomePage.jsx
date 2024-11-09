import React, { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from "@mui/icons-material/GetApp";
import "./HomePage.css";
import Navbar from "./Navbar";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
        <div className="text-container">
          <span>hey,</span>
          <p>
            this is{" "}
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="name-hover"
            >
              Tijil
            </span>
            ,
          </p>
          <span>a tech geek.</span>
        </div>
        <div className="image-container">
          {isHovered && (
            <div className="popup-container">
              <div className="popup-image">
                <img
                  src="IMG-20240329-WA0047.jpg" // Replace with the path to your image
                  alt="Tijil"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="home-page-footer">
        <a
          href="https://github.com/tijilparakh04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/tijil-parakh-bb7b2a253/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/tijilparakh04/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="/portfolio_tijil/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GetAppIcon />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
