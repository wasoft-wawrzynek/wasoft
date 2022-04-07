import "./MobileNav.scss";
import React, { useState } from "react";
import Scroll from "react-scroll";
import { Menu } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import LanguageSelector from "../controls/LanguageSelector";
import { sections } from "./Header";

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
        {sections.map((section) => {
          return (
            <Menu.Item
              as={Scroll.Link}
              smooth
              spy
              to={section}
              offset={-90}
              onClick={() => setShowPanel(false)}
            >
              <FormattedMessage id={`header.${section}`} />
            </Menu.Item>
          );
        })}
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
