import "./MainNav.scss";
import Scroll from "react-scroll";
import { Menu } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import LanguageSelector from "../controls/LanguageSelector";
import { INavBarProps, sections } from "./Header";

function MainNav(props: INavBarProps) {
  return (
    <>
      <div id="main-nav">
        {sections.map((section) => {
          return (
            <Menu.Item
              key={section}
              as={Scroll.Link}
              smooth
              spy
              to={section}
              offset={-90}
            >
              <FormattedMessage id={`header.${section}`} />
            </Menu.Item>
          );
        })}
      </div>
      <LanguageSelector
        language={props.language}
        setLanguage={props.setLanguage}
      />
    </>
  );
}

export default MainNav;
