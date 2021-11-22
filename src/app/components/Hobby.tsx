import React from "react";
import { FormattedMessage } from "react-intl";
import "./Hobby.scss";

const Hobby: React.FC = () => {
  return (
    <div id="hobby">
      <div className="container">
        <h2>
          <FormattedMessage id="hobby.title" />
        </h2>
      </div>
    </div>
  );
};

export default Hobby;
