import React from "react";
import { FormattedMessage } from "react-intl";
import "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <div id="contact">
      <div className="container">
        <h2>
          <FormattedMessage id="contact.title" />
        </h2>
      </div>
    </div>
  );
};

export default Contact;
