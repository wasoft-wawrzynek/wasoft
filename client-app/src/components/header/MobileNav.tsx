import "./MobileNav.scss";
import { useState } from "react";
import LanguageSelector from "../controls/LanguageSelector";
import { sections } from "./Header";
import { Trans } from "react-i18next";

const MobileNav = () => {
  const [showPanel, setShowPanel] = useState(false);

  const scroll = (section: string) => {
    setShowPanel(false);
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* TODO: Implement highlighting active section */
    /* TODO: Fix hiding on clicking outside the panel */
    /* TODO: Improve appearance (spacing between buttons, fonts, etc.) */
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

      <div
        className={`fixed top-0 right-0 h-screen w-[70vw] mt-16 max-w-xs bg-dark flex flex-col items-start pt-24 px-6 z-10 transition-transform duration-500 ${showPanel ? "translate-x-0" : "translate-x-full"
          }`}>
        <button
          className="item text-light py-2 mb-2 text-xl font-bold border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors w-full text-left"
          onClick={() => scroll("hero")}
        >
          WaSoft
        </button>
        {sections.map((section) => (
          <button
            key={section}
            className="item text-light py-2 mb-2 text-xl border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors w-full text-left"
            onClick={() => scroll(section)}
          >
            <Trans i18nKey={`header.${section}`} />
          </button>
        ))}
        <div className="mt-4 w-full">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
