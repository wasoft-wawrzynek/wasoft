import "./MobileNav.scss";
import React, { useState } from "react";
import Scroll from "react-scroll";
import { Menu } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import LanguageSelector from "./LanguageSelector";

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
          to="hero"
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
          <FormattedMessage id="header.skills" />
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
          <FormattedMessage id="header.experience" />
        </Menu.Item>
        <Menu.Item
          as={Scroll.Link}
          smooth
          spy
          to="education"
          offset={-90}
          onClick={() => setShowPanel(false)}
        >
          <FormattedMessage id="header.education" />
        </Menu.Item>
        <Menu.Item
          as={Scroll.Link}
          smooth
          spy
          to="hobby"
          offset={-90}
          onClick={() => setShowPanel(false)}
        >
          <FormattedMessage id="header.hobby" />
        </Menu.Item>
        <Menu.Item
          as={Scroll.Link}
          smooth
          spy
          to="contact"
          offset={-90}
          onClick={() => setShowPanel(false)}
        >
          <FormattedMessage id="header.contact" />
        </Menu.Item>
        <LanguageSelector
          inline
          language={language}
          setLanguage={(lang) => {
            setLanguage(lang);
            setShowPanel(false);
          }}
        />
      </div>
    </div>
  );
};

export default MobileNav;
