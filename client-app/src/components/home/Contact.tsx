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
    <div className="relative bg-medium-dark"    >
      <div className="container mx-auto py-8 mx-auto px-4">
        <h2 className="section-title">
          <Trans i18nKey="contact.title" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <div className="border-4 border-primary rounded-full w-1/4 p-4 md:p-8">
              <img className="w-full" src="/img/paper-plane.png" alt="" />
            </div>
            <p className="text-light leading-6">
              <Trans i18nKey="contact.intro" components={substitutes} />
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
          >
            <input
              type="text"
              name="company"
              placeholder={t("contact.company")}
              onChange={handleInputChange}
              value={input.company}
              className="text-light bg-dark border border-medium-light px-4 py-2 my-2 w-full rounded focus:outline-none focus:border-primary transition"
            />
            <input
              type="text"
              name="name"
              placeholder={t("contact.name")}
              required
              onChange={handleInputChange}
              value={input.name}
              className="text-light bg-dark border border-medium-light px-4 py-2 my-2 w-full rounded focus:outline-none focus:border-primary transition"
            />
            <input
              type="email"
              name="email"
              placeholder={t("contact.address")}
              required
              onChange={handleInputChange}
              value={input.email}
              className="text-light bg-dark border border-medium-light px-4 py-2 my-2 w-full rounded focus:outline-none focus:border-primary transition"
            />
            <textarea
              name="message"
              placeholder={t("contact.message")}
              required
              onChange={handleInputChange}
              value={input.message}
              className="text-light bg-dark border border-medium-light px-4 py-2 my-2 w-full rounded h-40 resize-none focus:outline-none focus:border-primary transition"
            ></textarea>
            <input
              disabled={!(input.name && input.email && input.message)}
              type="submit"
              value={t("contact.send")}
              className={`mt-2 px-6 py-2 rounded font-bold text-lg transition 
                ${input.name && input.email && input.message
                  ? "bg-primary text-dark cursor-pointer border-none"
                  : "bg-medium-dark text-medium-light border border-medium-light cursor-not-allowed"
                }`}
            />
          </form>
        </div>
        {/* Resume Info */}
        <div className="flex flex-col items-center gap-4 mt-16 mb-8 max-w-xl mx-auto text-center bg-medium-dark/80 p-4 rounded-lg">
          <p className="text-light">
            <Trans i18nKey="contact.resume" />
          </p>
          <Link to="/resume">
            <div className="border-4 border-primary rounded-full w-24 h-24 p-4 my-2">
              <DownloadIcon className="w-full h-full fill-primary" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
