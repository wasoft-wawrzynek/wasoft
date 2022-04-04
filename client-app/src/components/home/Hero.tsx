import "./Hero.scss";
import React from "react";
import Typed from "react-typed";
import { FormattedMessage, useIntl } from "react-intl";
import { ReactComponent as WasoftIcon } from "../../icons/wasoft-light-full.svg";

const Hero: React.FC = () => {
  const intl = useIntl();

  const words = [
    intl.messages["hero.developer"].toString(),
    intl.messages["hero.team-leader"].toString(),
    intl.messages["hero.brewer"].toString(),
  ];

  return (
    <div id="hero">
      <div className="hero-content">
        <div className="logo-content">
          <div className="img-container">
            <div className="img-bubble profile">
              <img src="/img/profile.png" alt="logo" />
            </div>
            <div className="img-bubble wasoft">
              <WasoftIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="info-content">
          <h3>
            <FormattedMessage id="hero.introduction-start" />
            <span>Paweł</span>
            <FormattedMessage id="hero.introduction-end" />
          </h3>
          <h2>
            <Typed
              strings={words}
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

export default Hero;
