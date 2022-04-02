import "./Header.scss";
import React from "react";
import { Container, Menu } from "semantic-ui-react";
import Scroll from "react-scroll";
import LanguageSelector from "./LanguageSelector";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header: React.FC<{
  isHidden: boolean;
  language: string;
  setLanguage: (language: string) => void;
}> = (props) => {
  return (
    <div id="header">
      <Menu className={props.isHidden ? "hidden" : ""}>
        <Container>
          <Menu.Item className="logo" as={Scroll.Link} smooth spy to="hero">
            <img className="logo-img" src="/img/wasoft-light.svg" alt="" />
          </Menu.Item>
          <MainNav language={props.language} setLanguage={props.setLanguage} />
          <LanguageSelector
            language={props.language}
            setLanguage={props.setLanguage}
          />
          <MobileNav
            language={props.language}
            setLanguage={props.setLanguage}
          />
        </Container>
      </Menu>
    </div>
  );
};

export default Header;
