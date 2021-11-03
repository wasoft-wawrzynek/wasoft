import React, { useEffect, useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import Scroll from "react-scroll";
import "./NavBar.scss";
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
          <Menu.Item name="skills" as={ScrollLink} smooth spy to="skills" />
          <Menu.Item
            name="experience"
            as={ScrollLink}
            smooth
            spy
            to="experience"
          />
          <Menu.Item
            name="education"
            as={ScrollLink}
            smooth
            spy
            to="education"
          />
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
            name="skills"
            as={ScrollLink}
            smooth
            spy
            to="skills"
            onClick={() => setShowPanel(false)}
          />
          <Menu.Item
            name="Experience"
            as={ScrollLink}
            smooth
            spy
            to="experience"
            onClick={() => setShowPanel(false)}
          />
          <Menu.Item
            name="education"
            as={ScrollLink}
            smooth
            spy
            to="education"
            onClick={() => setShowPanel(false)}
          >
            Daj znać
          </Menu.Item>
        </div>
      </Container>
    </Menu>
  );
};

export default NavBar;
