import "./MainNav.scss";
import React from "react";
import { Menu } from "semantic-ui-react";
import Scroll from "react-scroll";
import { FormattedMessage } from "react-intl";
import LanguageSelector from "./LanguageSelector";

const MainNav: React.FC<{
  language: string;
  setLanguage: (language: string) => void;
}> = (props) => {
  return (
    <>
      <div id="main-nav">
        {/* <Menu.Item as={Scroll.Link} smooth spy to="skills">
        <FormattedMessage id="header.skills" />
      </Menu.Item> */}
        <Menu.Item as={Scroll.Link} smooth spy to="experience" offset={-90}>
          <FormattedMessage id="header.experience" />
        </Menu.Item>
        <Menu.Item as={Scroll.Link} smooth spy to="education" offset={-90}>
          <FormattedMessage id="header.education" />
        </Menu.Item>
        <Menu.Item as={Scroll.Link} smooth spy to="hobby" offset={-90}>
          <FormattedMessage id="header.hobby" />
        </Menu.Item>
        <Menu.Item as={Scroll.Link} smooth spy to="contact" offset={-90}>
          <FormattedMessage id="header.contact" />
        </Menu.Item>
      </div>
      <LanguageSelector
        language={props.language}
        setLanguage={props.setLanguage}
      />
    </>
  );
};

export default MainNav;
