import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import Scroll from "react-scroll";
import "./NavBar.scss";
import { FormattedMessage } from "react-intl";
const ScrollLink = Scroll.Link;

const NavBar: React.FC<{ className: string }> = (props) => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <Menu className={props.className}>
      <Container>
        <Menu.Item
          className="logo"
          as={ScrollLink}
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
          <Menu.Item as={ScrollLink} smooth spy to="header">
            WaSoft
          </Menu.Item>
          <Menu.Item as={ScrollLink} smooth spy to="skills">
            <FormattedMessage id="navbar.skills" />
          </Menu.Item>
          <Menu.Item as={ScrollLink} smooth spy to="experience">
            <FormattedMessage id="navbar.experience" />
          </Menu.Item>
          <Menu.Item as={ScrollLink} smooth spy to="education">
            <FormattedMessage id="navbar.education" />
          </Menu.Item>
        </div>
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
            as={ScrollLink}
            smooth
            spy
            to="header"
            onClick={() => setShowPanel(false)}
          >
            WaSoft
          </Menu.Item>
          <Menu.Item
            as={ScrollLink}
            smooth
            spy
            to="skills"
            onClick={() => setShowPanel(false)}
          >
            <FormattedMessage id="navbar.skills" />
          </Menu.Item>
          <Menu.Item
            name="Experience"
            as={ScrollLink}
            smooth
            spy
            to="experience"
            onClick={() => setShowPanel(false)}
          >
            <FormattedMessage id="navbar.experience" />
          </Menu.Item>
          <Menu.Item
            as={ScrollLink}
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
  );
};

export default NavBar;
