import { useEffect, useState } from "react";
import { Trans } from "react-i18next";
import { Sling as Hamburger } from "hamburger-react";
import WasoftLightIcon from "@/resources/icons/wasoft.svg?react";
import LanguageSelector from "../controls/LanguageSelector";

export const sections = [
  "experience",
  "skills",
  "education",
  "hobby",
  "contact",
];

const TOP_PANEL_HEIGHT = 72; // h-18 = 4.5rem = 72px

const Navigation = () => {
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showTopPanel, setShowTopPanel] = useState(false);

  // Show/hide top panel on scroll (desktop)
  useEffect(() => {
    const handleScroll = () => {
      let isOnTop = window.scrollY <= 50;
      setShowTopPanel(!isOnTop);
      if (isOnTop) setShowSidePanel(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + TOP_PANEL_HEIGHT + 10;
      let currentSection: string = "";
      for (const section of sections) {
        const offsetTop = document.getElementById(section)?.offsetTop;
        if (offsetTop && scrollPosition >= offsetTop) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (section: string) => {
    setShowSidePanel(false);
    const el = document.getElementById(section);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - TOP_PANEL_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full h-18 z-20 bg-dark transition-all duration-700 ${showTopPanel ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container h-full mx-auto flex items-center justify-between px-0 py-0">
        <div className="h-full ml-4 flex items-center">
          <WasoftLightIcon className="h-full w-auto" />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scroll(section)}
              className={`mx-2 px-4 py-2 text-light font-teko font-medium text-[1.5rem] hover:border-primary hover:text-primary transition-colors duration-200 ${activeSection === section ? "border-b-2 border-primary text-primary" : ""
                }`}
            >
              <Trans i18nKey={`header.${section}`} />
            </button>
          ))}
        </div>
        <LanguageSelector className="hidden md:flex items-center h-full mr-4" />

        {/* Mobile */}
        <div className="md:hidden flex items-center h-full mr-4">
          <Hamburger
            toggled={showSidePanel}
            toggle={setShowSidePanel}
            size={32}
            color="#96fd00"
            rounded
            direction="right"
          />
        </div>
      </div>
      {showSidePanel && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-5 h-screen w-screen"
            onClick={() => setShowSidePanel(false)}
          />
          <div
            className={`fixed top-18 right-0 h-screen w-[70vw] bg-dark/80 flex flex-col items-start px-6 z-6 transition-transform duration-500 ${showSidePanel ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {sections.map((section) => (
              <button
                key={section}
                className={`px-0 mx-0 my-2 leading-2 transition-colors text-left ${activeSection === section ? "text-primary border-b-2 border-primary" : ""}`}
                onClick={() => scroll(section)}
              >
                <Trans i18nKey={`header.${section}`} />
              </button>
            ))}
            <LanguageSelector className="mt-4 w-full flex justify-start" />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;