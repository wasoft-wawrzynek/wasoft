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

  /* TODO: Implement highlighting active section */
  /* TODO: Fix hiding on clicking outside the panel */
  /* TODO: Improve appearance (spacing between buttons, fonts, etc.) */
  return (
    <div className="relative z-20 md:hidden h-16 w-16">
      {/* Hamburger toggler */}
      <button
        aria-label="Toggle menu"
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 focus:outline-none"
        onClick={() => setShowPanel((v) => !v)}
        tabIndex={0}
      >
        <div className="relative w-10 h-10 flex items-center justify-center">
          {/* Top line */}
          <span
            className={`absolute w-8 h-1 bg-primary rounded transition-all duration-300
              ${showPanel ? "rotate-45 top-4" : "-top-2"}
            `}
          />
          {/* Middle line */}
          <span
            className={`absolute w-8 h-1 bg-primary rounded transition-all duration-300
              ${showPanel ? "opacity-0" : "top-0"}
            `}
          />
          {/* Bottom line */}
          <span
            className={`absolute w-8 h-1 bg-primary rounded transition-all duration-300
              ${showPanel ? "-rotate-45 top-4" : "top-2"}
            `}
          />
        </div>
      </button>

      {/* Side panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70vw] max-w-xs bg-dark flex flex-col items-start pt-24 px-6 z-10 transition-transform duration-500 ${showPanel ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ marginTop: "4rem" }}
      >
        <button
          className="text-light py-2 mb-2 text-xl font-bold border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors w-full text-left"
          onClick={() => scroll("hero")}
        >
          WaSoft
        </button>
        {sections.map((section) => (
          <button
            key={section}
            className="text-light py-2 mb-2 text-xl border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors w-full text-left"
            onClick={() => scroll(section)}
          >
            <Trans i18nKey={`header.${section}`} />
          </button>
        ))}
        <div className="mt-4 w-full">
          <LanguageSelector />
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {showPanel && (
        <div
          className="fixed inset-0 z-0 bg-black bg-opacity-30"
          onClick={() => setShowPanel(false)}
        />
      )}
    </div>
  );
};

export default MobileNav;
