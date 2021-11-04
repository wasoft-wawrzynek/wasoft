import React from "react";
import { FormattedMessage } from "react-intl";
import "./Education.scss";

const Education: React.FC = () => {
  return (
    <div id="education">
      <div className="container">
        <h2>
          <FormattedMessage id="education.title" />
        </h2>
      </div>
    </div>
  );
};

export default Education;
