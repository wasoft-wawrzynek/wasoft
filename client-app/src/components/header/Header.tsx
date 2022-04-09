import "./Header.scss";
import React from "react";
import { Container, Menu } from "semantic-ui-react";
import Scroll from "react-scroll";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { ReactComponent as WasoftLightIcon } from "../../icons/wasoft.svg";

export const sections = [
  "experience",
  "skills",
  "education",
  "hobby",
  "contact",
];

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
            <WasoftLightIcon className="logo-img" />
          </Menu.Item>
          <MainNav language={props.language} setLanguage={props.setLanguage} />
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
