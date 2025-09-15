import { useEffect, useState } from "react";
import LanguageSelector from "../controls/LanguageSelector";
import { sections } from "./Header";
import { Trans } from "react-i18next";

const TOPBAR_HEIGHT = 72; // "h-18" = 4.5rem = 72px

const MainNav = () => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActive(visible.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scroll = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      const yOffset = -TOPBAR_HEIGHT;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hidden md:flex flex-row items-center">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scroll(section)}
            className={`mx-1 px-4 py-2 text-light font-teko font-medium text-[1.5rem] border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors duration-200 ${active === section ? "border-primary text-primary" : ""
              }`}
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
