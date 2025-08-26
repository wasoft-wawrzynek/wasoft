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
      <div id="side-panel" className={showPanel ? "" : " hidden"}>
        <button className="item" onClick={() => scroll("hero")}>WaSoft</button>
        {sections.map((section) => {
          return (
            <button key={section} className="item" onClick={() => scroll(section)}>
              <Trans i18nKey={`header.${section}`} />
            </button>
          );
        })}
        <LanguageSelector />
      </div>
    </div>
  );
}

export default MobileNav;
