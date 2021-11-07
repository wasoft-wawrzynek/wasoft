import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import Scroll from "react-scroll";
import "./NavBar.scss";
import { FormattedMessage } from "react-intl";
import LanguageSelector from "./LanguageSelector";

const NavBar: React.FC<{
  language: string;
  setLanguage: (language: string) => void;
  className: string;
}> = (props) => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div id="navbar">
      <Menu className={props.className}>
        <Container>
          <Menu.Item
            className="logo"
            as={Scroll.Link}
            smooth
            spy
            to="header"
            onClick={() => setShowPanel(false)}
          >
            <img
              className="logo-img"
              src={process.env.PUBLIC_URL + "/img/logo-black.png"}
              alt=""
            />
          </Menu.Item>
          <div id="main-nav">
            <Menu.Item as={Scroll.Link} smooth spy to="header">
              WaSoft
            </Menu.Item>
            <Menu.Item as={Scroll.Link} smooth spy to="skills">
              <FormattedMessage id="navbar.skills" />
            </Menu.Item>
            <Menu.Item as={Scroll.Link} smooth spy to="experience">
              <FormattedMessage id="navbar.experience" />
            </Menu.Item>
            <Menu.Item as={Scroll.Link} smooth spy to="education">
              <FormattedMessage id="navbar.education" />
            </Menu.Item>
          </div>
          <LanguageSelector
            setLanguage={props.setLanguage}
            language={props.language}
          />
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
            <Menu.Item
              as={Scroll.Link}
              smooth
              spy
              to="skills"
              onClick={() => setShowPanel(false)}
            >
              <FormattedMessage id="navbar.skills" />
            </Menu.Item>
            <Menu.Item
              name="Experience"
              as={Scroll.Link}
              smooth
              spy
              to="experience"
              onClick={() => setShowPanel(false)}
            >
              <FormattedMessage id="navbar.experience" />
            </Menu.Item>
            <Menu.Item
              as={Scroll.Link}
              smooth
              spy
              to="education"
              onClick={() => setShowPanel(false)}
            >
              <FormattedMessage id="navbar.education" />
            </Menu.Item>
          </div>
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
