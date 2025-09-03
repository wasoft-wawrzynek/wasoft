import LanguageSelector from "../controls/LanguageSelector";
import { sections } from "./Header";
import { Trans } from "react-i18next";

const MainNav = () => {
  const scroll = (section: string) => {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hidden md:flex flex-row items-center">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scroll(section)}
            className="mx-1 px-4 py-2 text-light font-teko font-medium text-[1.5rem] border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors duration-200"
          >
            <Trans i18nKey={`header.${section}`} />
          </button>
        ))}
      </div>
      <LanguageSelector />
    </>
  );
};

export default MainNav;
