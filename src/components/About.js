import React from "react";
import "../styles/About.css";
import Links from "./Links";
import Card from "./Card";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faJs, faCss3, faGit, faWordpress } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className="About">
      <div className="About-container">
        <div className="About-banner">
          <header>About</header>
          <Links />
        </div>
        <div className="About-content">
          <div className="About-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="About-skills">
            <div className="About-bottom">
            <header>Skills</header>
            </div>
            <div className="About-card">
            <Card icons={faWordpress} title="Wordpress" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
            <Card icons={faReact} title="React" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
            <Card icons={faHtml5} title="HTML" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
            <Card icons={faJs} title="Javascript" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
            <Card icons={faCss3} title="CSS" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
            <Card icons={faGit} title="Git"desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
