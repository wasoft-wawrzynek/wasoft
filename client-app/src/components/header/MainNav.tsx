import "./MainNav.scss";
import { FormattedMessage } from "react-intl";
import LanguageSelector from "../controls/LanguageSelector";
import { INavBarProps, sections } from "./Header";

function MainNav(props: INavBarProps) {
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
