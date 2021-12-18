import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import Scroll from "react-scroll";
import "./MobileNav.scss";
import { FormattedMessage } from "react-intl";

const MobileNav: React.FC<{
  language: string;
  setLanguage: (language: string) => void;
}> = ({ language, setLanguage }) => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div id="mobile-nav">
      <input
        type="checkbox"
        className="toggler"
        checked={showPanel}
        onChange={() => setShowPanel(!showPanel)}
      />
      <div className="hamburger">
        <div></div>
      </div>
      <div id="side-panel" className={showPanel ? "" : " hidden"}>
        <Menu.Item
          as={Scroll.Link}
          smooth
          spy
          to="header"
          onClick={() => setShowPanel(false)}
        >
          WaSoft
        </Menu.Item>
        {/* <Menu.Item
          as={Scroll.Link}
          smooth
          spy
          to="skills"
          onClick={() => setShowPanel(false)}
        >
          <FormattedMessage id="navbar.skills" />
        </Menu.Item> */}
        <Menu.Item
          name="Experience"
          as={Scroll.Link}
          smooth
          spy
          to="experience"
          offset={-90}
          onClick={() => setShowPanel(false)}
        >
          <FormattedMessage id="navbar.experience" />
        </Menu.Item>
        <Menu.Item
          as={Scroll.Link}
          smooth
          spy
          to="education"
          offset={-90}
          onClick={() => setShowPanel(false)}
        >
          <FormattedMessage id="navbar.education" />
        </Menu.Item>
        <Menu.Item
          as={Scroll.Link}
          smooth
          spy
          to="hobby"
          offset={-90}
          onClick={() => setShowPanel(false)}
        >
          <FormattedMessage id="navbar.hobby" />
        </Menu.Item>
        <Menu.Item
          as={Scroll.Link}
          smooth
          spy
          to="contact"
          offset={-90}
          onClick={() => setShowPanel(false)}
        >
          <FormattedMessage id="navbar.contact" />
        </Menu.Item>
        <div className="lang">
          <img
            src="/img/pl.svg"
            alt="PL"
            className={`${language === "pl" ? "active" : ""}`}
            onClick={() => {
              setLanguage("pl");
              setShowPanel(false);
            }}
          />
          <img
            src="/img/en.svg"
            alt="EN"
            className={`${language === "en" ? "active" : ""}`}
            onClick={() => {
              setLanguage("en");
              setShowPanel(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
