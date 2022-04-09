import "./Footer.scss";
import React from "react";
import packageJson from "../../../package.json";
import { ReactComponent as WawrzelniaIcon } from "../../icons/wawrzelnia.svg";
import { ReactComponent as BitbucketIcon } from "../../icons/bitbucket.svg";
import { ReactComponent as LinkedInIcon } from "../../icons/linkedin.svg";
import { ReactComponent as WasoftIcon } from "../../icons/wasoft.svg";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="links">
            <WasoftIcon className="logo-wasoft" />
            <a
              href="https://www.linkedin.com/in/pawe%C5%82-wawrzynek-6b3433100/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedInIcon className="logo-social" />
            </a>
            <a
              href="https://bitbucket.org/Laurer/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BitbucketIcon className="logo-social" />
            </a>
            <a
              href="https://www.wawrzelnia.pl/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <WawrzelniaIcon className="logo-wawrzelnia" />
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
