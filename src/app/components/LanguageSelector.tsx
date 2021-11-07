import React, { useState } from "react";
import { Dropdown, DropdownProps } from "semantic-ui-react";
import "./LanguageSelector.scss";

const options = [
  {
    key: "pl",
    value: "pl",
    image: {
      src: "/img/pl.svg",
    },
  },
  {
    key: "en",
    value: "en",
    image: {
      src: "/img/en.svg",
    },
  },
];

const LanguageSelector: React.FC<{
  language: string;
  setLanguage: (language: string) => void;
}> = ({ setLanguage, language }) => {
  const [selection, setSelection] = useState(language);

  const onChange = (
    event: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    console.log(data.value);
    if (data.value) {
      setSelection(data.value.toString());
      setLanguage(data.value.toString());
    }
  };

  return (
    <div id="lang">
      <Dropdown
        inline
        basic
        selection
        onChange={onChange}
        options={options}
        value={selection}
      />
    </div>
  );
};

export default LanguageSelector;
