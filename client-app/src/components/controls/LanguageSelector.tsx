import React from "react";
import { Dropdown, DropdownProps } from "semantic-ui-react";
import "./LanguageSelector.scss";

interface ILanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  inline?: boolean;
}

const options = [
  {
    key: "pl",
    value: "pl",
    image: {
      src: "/img/icons/pl.svg",
    },
  },
  {
    key: "en",
    value: "en",
    image: {
      src: "/img/icons/en.svg",
    },
  },
];

function LanguageSelector(props: ILanguageSelectorProps) {
  const onChange = (
    event: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    if (data.value) {
      props.setLanguage(data.value.toString());
    }
  };

  return props.inline ? (
    <div id="lang-inline">
      {options.map((lang) => {
        return (
          <img
            key={lang.key}
            src={lang.image.src}
            alt={lang.key.toUpperCase()}
            className={`${props.language === lang.key ? "active" : ""}`}
            onClick={() => props.setLanguage(lang.key)}
          />
        );
      })}
    </div>
  ) : (
    <div id="lang-drop">
      <Dropdown
        inline
        basic
        selection
        onChange={onChange}
        options={options}
        value={props.language}
      />
    </div>
  );
}

export default LanguageSelector;
