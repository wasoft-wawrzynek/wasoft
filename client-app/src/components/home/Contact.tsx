import "./Contact.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { substitutes } from "../../resources/translations";
import IContactFormData from "../../api/models/IContactFormData";
import client from "../../api/client";
import DownloadIcon from "@/resources/icons/download.svg?react";

const Contact = () => {
  const { t } = useTranslation();

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
        title: t("contact.error"),
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: t("contact.success"),
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
          <Trans i18nKey="contact.title" />
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="img-bubble">
              <img className="icon" src="/img/paper-plane.png" alt="" />
            </div>
            <p>
              <Trans i18nKey="contact.intro" components={substitutes} />
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="company"
              placeholder={t("contact.company")}
              onChange={handleInputChange}
              value={input.company}
            />
            <input
              type="text"
              name="name"
              placeholder={t("contact.name")}
              required
              onChange={handleInputChange}
              value={input.name}
            />
            <input
              type="email"
              name="email"
              placeholder={t("contact.address")}
              required
              onChange={handleInputChange}
              value={input.email}
            />
            <textarea
              name="message"
              placeholder={t("contact.message")}
              required
              onChange={handleInputChange}
              value={input.message}
            ></textarea>
            <input
              disabled={!(input.name && input.email && input.message)}
              type="submit"
              value={t("contact.send")}
            />
          </form>
        </div>
        <div className="resume-info">
          <p>
            <Trans i18nKey="contact.resume" />
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

export default Contact;
