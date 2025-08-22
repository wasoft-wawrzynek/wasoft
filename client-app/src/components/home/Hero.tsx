import "./Hero.scss";
import { FormattedMessage, useIntl } from "react-intl";
import Typed from "../controls/Typed";
import WasoftIcon from "../../icons/wasoft-light-full.svg?react";

const Hero = () => {
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
              typeSpeed={40}
              backSpeed={20}
              backDelay={2000}
              cursorChar="_"
              loop
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
