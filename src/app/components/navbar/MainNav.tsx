import React from "react";
import { Menu } from "semantic-ui-react";
import Scroll from "react-scroll";
import "./MainNav.scss";
import { FormattedMessage } from "react-intl";

const MainNav: React.FC<{
  language: string;
  setLanguage: (language: string) => void;
}> = (props) => {
  return (
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
  );
};

export default MainNav;
