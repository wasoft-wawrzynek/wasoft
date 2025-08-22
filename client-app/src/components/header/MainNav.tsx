import "./MainNav.scss";
import { FormattedMessage } from "react-intl";
import LanguageSelector from "../controls/LanguageSelector";
import { sections } from "./Header";

const MainNav = () => {
  return (
    <>
      <div id="main-nav">
        {sections.map((section) => {
          return (
            <button
              key={section}
              as={Scroll.Link}
              smooth
              spy
              to={section}
              offset={-90}
            >
              <FormattedMessage id={`header.${section}`} />
            </button>
          );
        })}
      </div>
      <LanguageSelector />
    </>
  );
}

export default MainNav;
