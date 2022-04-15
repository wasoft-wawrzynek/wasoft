import "./Contact.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FormattedMessage,
  injectIntl,
  WrappedComponentProps,
} from "react-intl";
import { values } from "../../resources/translations";
import IContactFormData from "../../api/models/IContactFormData";
import client from "../../api/client";
import { ReactComponent as DownloadIcon } from "../../icons/download.svg";

const Contact = (props: WrappedComponentProps) => {
  const [input, setInput] = useState<IContactFormData>({
    company: "",
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event: any) => {
    event.persist();
    setInput((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let result = await client.Contact.sendContactForm(input);
    if (result === false) {
      Swal.fire({
        icon: "error",
        title: props.intl.formatMessage({ id: "contact.error" }),
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: props.intl.formatMessage({ id: "contact.success" }),
    });
    setInput({
      company: "",
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact">
      <div className="container">
        <h2 className="section-title">
          <FormattedMessage id="contact.title" />
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="img-bubble">
              <img className="icon" src="/img/paper-plane.png" alt="" />
            </div>
            <p>
              <FormattedMessage id="contact.intro" values={values} />
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="company"
              placeholder={props.intl.formatMessage({ id: "contact.company" })}
              onChange={handleInputChange}
              value={input.company}
            />
            <input
              type="text"
              name="name"
              placeholder={props.intl.formatMessage({ id: "contact.name" })}
              required
              onChange={handleInputChange}
              value={input.name}
            />
            <input
              type="email"
              name="email"
              placeholder={props.intl.formatMessage({ id: "contact.address" })}
              required
              onChange={handleInputChange}
              value={input.email}
            />
            <textarea
              name="message"
              placeholder={props.intl.formatMessage({ id: "contact.message" })}
              required
              onChange={handleInputChange}
              value={input.message}
            ></textarea>
            <input
              disabled={!(input.name && input.email && input.message)}
              type="submit"
              value={props.intl.formatMessage({ id: "contact.send" })}
            />
          </form>
        </div>
        <div className="resume-info">
          <p>
            <FormattedMessage id="contact.resume" />
          </p>
          <Link to="/resume">
            <div className="img-bubble">
              <DownloadIcon className="icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Contact);
