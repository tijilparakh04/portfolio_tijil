import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHtml5, FaJsSquare, FaReact, FaCss3Alt, FaGithub, FaPython, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa"; // Import icons
import "./SkillPage.css";

const skills = [
  { name: "javascript", icon: <FaJsSquare /> },
  { name: "react", icon: <FaReact /> },
  { name: "html", icon: <FaHtml5 /> },
  { name: "css", icon: <FaCss3Alt /> },
  { name: "github", icon: <FaGithub /> },
  { name: "python", icon: <FaPython /> },
  // { name: "C", icon: <FaC /> },
  { name: "Node JS", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "java", icon: <FaJava /> }
];

const SkillPage = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerPadding: "0"
        }
      }
    ]
  };

  return (
    <div className="skill-container">
      <div className="skill-left">
        <div className="skill-header">
          skills
        </div>
        <p>Still learning and growing!</p>
      </div>
      <div className="skill-right">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="carousel-item">
              <a href="/skills" className="skill-item">
                <div>{skill.icon}</div>
                <div>{skill.name}</div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SkillPage;
