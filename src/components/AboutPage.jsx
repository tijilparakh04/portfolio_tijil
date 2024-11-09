import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        about me
      </div>
      <div className="about-info">
        <div className="about-left">
          I am a budding <span>software engineer</span> who has always
          been fascinated by technology and upcoming
          revolutions in the technical space.
        </div>
        <div className="about-right">
          <p>
          Ever since I was a kid, I was infamously notorious for being too curious and running around with tools in my hand trying to figure out how things work. 
          </p>
          <p>
            As a young adult, this has helped me to become someone who is always keen on learning something new and exploring new opportunities.
          </p>
          <p>
            They say a jack of all trades is a master of none. Well, I'm neither a jack of all trades nor a master of one, but I believe when needed I can be equivalent to the three Aces that win the hand. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
