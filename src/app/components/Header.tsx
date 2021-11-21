import "./Header.scss";
import React from "react";
import Particles from "react-tsparticles";
import { FormattedMessage, useIntl } from "react-intl";
import Typed from "react-typed";
import logo from "../icons/wasoft-light-full.svg";
import { particlesConfig } from "../config/particlesjs-config";

const Header: React.FC = () => {
  const intl = useIntl();

  function getWords() {
    return [
      intl.messages["header.developer"].toString(),
      intl.messages["header.team-leader"].toString(),
      intl.messages["header.brewer"].toString(),
      intl.messages["header.traveler"].toString(),
    ];
  }

  return (
    <div id="header">
      <Particles style={{ position: "unset" }} params={particlesConfig} />
      <div className="header-content">
        <div className="logo-content">
          <div className="img-container">
            <div className="img-bubble wasoft">
              <img src={logo} alt="logo" />
            </div>
            <div className="img-bubble profile">
              <img src=".\img\profile.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="info-content">
          <h3>
            <FormattedMessage id="header.introduction-start" />
            <span>Paweł</span>
            <FormattedMessage id="header.introduction-end" />
          </h3>
          <h2>
            <Typed
              strings={getWords()}
              typeSpeed={80}
              backSpeed={50}
              backDelay={3000}
              cursorChar="_"
              loop
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
