import "./Header.scss";
import React, { useEffect, useState } from "react";
import { particlesConfig } from "../config/particlesjs-config";
import logo from "../icons/wasoft-light-full.svg";
import Particles from "react-tsparticles";
import { FormattedMessage } from "react-intl";
import translations from "../config/translations";
import { init } from "ityped";

const Header: React.FC<{ locale: string }> = ({ locale }) => {
  function getWords(locale: string) {
    return [
      translations[locale]["header.developer"].toString(),
      translations[locale]["header.team-leader"].toString(),
      translations[locale]["header.brewer"].toString(),
      translations[locale]["header.traveler"].toString(),
    ];
  }
  function initTypingControl(selector: string, locale: string) {
    const typingElement = document.querySelector(selector);
    if (!typingElement) return;

    const typingConfig = {
      showCursor: true,
      cursorChar: "_",
      typeSpeed: 150,
      backSpeed: 100,
      strings: getWords(locale),
    };

    init(typingElement, typingConfig);
  }

  useEffect(() => {
    initTypingControl("#typing", locale);
  }, []);

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
            <span id="typing" />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
