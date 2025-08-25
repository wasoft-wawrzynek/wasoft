import "./Header.scss";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import WasoftLightIcon from "../../icons/wasoft.svg?react";
import { DropdownMenu, DropdownMenuContent } from "@radix-ui/react-dropdown-menu";

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
      {/* TODO: Check if this even works */}
      <DropdownMenu>
        <DropdownMenuContent className={props.isHidden ? "hidden" : ""}>
          {/* TODO: Implement scrolling to Hero section */}
          <div className="logo">
            <WasoftLightIcon className="logo-img" />
          </div>
          <MainNav />
          <MobileNav />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Header;
