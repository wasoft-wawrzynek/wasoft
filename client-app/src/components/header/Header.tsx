import "./Header.scss";
import { Container, Menu } from "semantic-ui-react";
import Scroll from "react-scroll";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import WasoftLightIcon from "../../icons/wasoft.svg?react";

interface IHeaderProps {
  isHidden: boolean;
  language: string;
  setLanguage: (language: string) => void;
}

export const sections = [
  "experience",
  "skills",
  "education",
  "hobby",
  "contact",
];

const Header = (props: IHeaderProps) => {
  return (
    <div id="header">
      <Menu className={props.isHidden ? "hidden" : ""}>
        <Container>
          <Menu.Item className="logo" as={Scroll.Link} smooth spy to="hero">
            <WasoftLightIcon className="logo-img" />
          </Menu.Item>
          <MainNav />
          <MobileNav />
        </Container>
      </Menu>
    </div>
  );
}

export default Header;
