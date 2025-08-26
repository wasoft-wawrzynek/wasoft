import "./MainNav.scss";
import LanguageSelector from "../controls/LanguageSelector";
import { sections } from "./Header";
import { Trans } from "react-i18next";

const MainNav = () => {
  const scroll = (section: string) => {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* TODO: Implement highlighting active section */
    <>
      <div id="main-nav">
        {sections.map((section) => {
          return (
            <button key={section} onClick={() => scroll(section)}>
              <Trans i18nKey={`header.${section}`} />
            </button>
          );
        })}
      </div>
      <LanguageSelector />
    </>
  );
}

export default MainNav;
