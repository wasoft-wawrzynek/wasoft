import "./Header.scss";
import React from "react";
import Typed from "react-typed";
import { FormattedMessage, useIntl } from "react-intl";

const Header: React.FC = () => {
  const intl = useIntl();

  const words = [
    intl.messages["header.developer"].toString(),
    intl.messages["header.team-leader"].toString(),
    intl.messages["header.brewer"].toString(),
  ];

  return (
    <div id="header">
      <div className="header-content">
        <div className="logo-content">
          <div className="img-container">
            <div className="img-bubble profile">
              <img src=".\img\profile.png" alt="logo" />
            </div>
            <div className="img-bubble wasoft">
              <img src="img/wasoft-light-full.svg" alt="logo" />
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

export default Header;
