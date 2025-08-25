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
            // TODO: Implement scrolling to section
            <button key={section}            >
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
