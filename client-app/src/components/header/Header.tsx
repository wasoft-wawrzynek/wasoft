import "./Header.scss";
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
      <div className={`menu ${props.isHidden ? "hidden" : ""}`}>
        {/* TODO: Implement scrolling to Hero section */}
        <div className="container">
          <div className="logo">
            <WasoftLightIcon className="logo-img" />
          </div>
          <MainNav />
          <MobileNav />
        </div>
      </div>
    </div>
  );
}

export default Header;
