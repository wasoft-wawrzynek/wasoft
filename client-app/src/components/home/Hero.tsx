import "./Hero.scss";
import { Trans, useTranslation } from "react-i18next";
import Typed from "../controls/Typed";
import WasoftIcon from "@/resources/icons/wasoft-light-full.svg?react";

const Hero = () => {
  const { t } = useTranslation();

  const words = [
    t("hero.developer"),
    t("hero.team-leader"),
    t("hero.brewer"),
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
            <Trans i18nKey="hero.introduction-start" />
            <span>Paweł</span>
            <Trans i18nKey="hero.introduction-end" />
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
