import "./MobileNav.scss";
import { useState } from "react";
import Scroll from "react-scroll";
import { Menu } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import LanguageSelector from "../controls/LanguageSelector";
import { INavBarProps, sections } from "./Header";

function MobileNav(props: INavBarProps) {
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
          language={props.language}
          setLanguage={(lang) => {
            props.setLanguage(lang);
            setShowPanel(false);
          }}
        />
      </div>
    </div>
  );
}

export default MobileNav;
