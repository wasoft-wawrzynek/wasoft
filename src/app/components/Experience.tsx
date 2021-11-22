import React from "react";
import { FormattedMessage } from "react-intl";
import "./Experience.scss";

const Experience: React.FC = () => {
  return (
    <div id="experience">
      <div className="container">
        <h2>
          <FormattedMessage id="experience.title" />
        </h2>
      </div>
    </div>
  );
};

export default Experience;
