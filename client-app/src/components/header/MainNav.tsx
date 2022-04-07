import "./MainNav.scss";
import React from "react";
import { Menu } from "semantic-ui-react";
import Scroll from "react-scroll";
import { FormattedMessage } from "react-intl";
import LanguageSelector from "../controls/LanguageSelector";
import { sections } from "./Header";

const MainNav: React.FC<{
  language: string;
  setLanguage: (language: string) => void;
}> = (props) => {
  return (
    <>
      <div id="main-nav">
        {sections.map((section) => {
          return (
            <Menu.Item as={Scroll.Link} smooth spy to={section} offset={-90}>
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
};

export default MainNav;
