import React from "react";
import { FormattedMessage } from "react-intl";
import "./Skills.scss";

const Skills: React.FC = () => {
  return (
    <div id="skills">
      <div className="container">
        <h2>
          <FormattedMessage id="skills.title" />
        </h2>
      </div>
    </div>
  );
};

export default Skills;
