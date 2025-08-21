import "./MobileNav.scss";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import LanguageSelector from "../controls/LanguageSelector";
import { INavBarProps, sections } from "./Header";

function MobileNav(props: INavBarProps) {
  const [showPanel, setShowPanel] = useState(false);

  const scroll = (section: string) => {
    setShowPanel(false);
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
        <button onClick={() => scroll("hero")}>WaSoft</button>
        {sections.map((section) => {
          return (
            <button key={section} onClick={() => scroll(section)}>
              <FormattedMessage id={`header.${section}`} />
            </button>
          );
        })}
        <LanguageSelector />
      </div>
    </div>
  );
}

export default MobileNav;
