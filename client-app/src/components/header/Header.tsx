import "./Header.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import WasoftLightIcon from "@/resources/icons/wasoft.svg?react";

export const sections = [
  "experience",
  "skills",
  "education",
  "hobby",
  "contact",
];

const Header = () => {
  useTranslation();

  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="header">
      <div className={`menu ${onTop ? "hidden" : ""}`}>
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
