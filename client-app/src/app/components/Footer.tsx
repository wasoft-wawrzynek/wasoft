import React from "react";
import "./Footer.scss";
import packageJson from "../../../package.json";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="links">
            <img className="logo-wasoft" src="img/wasoft-light.svg" alt="" />
            <a
              href="https://www.linkedin.com/in/pawe%C5%82-wawrzynek-6b3433100/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="social-logo" src="img/linkedin.svg" alt="" />
            </a>
            <a
              href="https://bitbucket.org/Laurer/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="social-logo" src="img/bitbucket.svg" alt="" />
            </a>
            <a
              href="https://www.wawrzelnia.pl/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="social-logo" src="img/wawrzelnia-black.svg" alt="" />
            </a>
          </div>
          <p>
            v.{packageJson.version} | {new Date().getFullYear()} &copy;{" "}
            <a href="http://www.wasoft.pl">WaSoft</a> All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
