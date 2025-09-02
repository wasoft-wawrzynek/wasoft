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
      <div className={`fixed top-0 w-full h-[90px] z-2 bg-dark bg-opacity-90 transition-all duration-1000 ${onTop ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="container h-full mx-auto flex items-center justify-between px-0 py-0">
          <div className="h-full ml-4 flex items-center">
            <WasoftLightIcon className="h-full w-auto" />
          </div>
          <MainNav />
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
