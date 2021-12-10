import { useState } from "react";
import {
  FormattedMessage,
  injectIntl,
  WrappedComponentProps,
} from "react-intl";
import { values } from "../config/translations";
import "./Contact.scss";

interface IContactForm {
  company: string;
  name: string;
  email: string;
  message: string;
}

const Contact = (props: WrappedComponentProps) => {
  const [input, setInput] = useState<IContactForm>({
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
    console.log(input);

    setInput({
      company: "",
      name: "",
      email: "",
      message: "",
    });

    // let result = await client.Contact.sendContactForm(input);
    // runInAction(() => {
    //   Swal.fire({
    //     icon: result === true ? "success" : "error",
    //     title:
    //       result === true
    //         ? "Twoja wiadomość została wysłana!"
    //         : "Nie udało się wysłać Twojej wiadomości. Spróbuj później.",
    //     showConfirmButton: false,
    //     timer: 3000,
    //   });

    //   if (result === true) {
    //     setInput({
    //       name: "",
    //       returnAddress: "",
    //       message: "",
    //     });
    //   }
    // });
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
              <img src="img/paper-plane.png" alt="" />
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
      </div>
    </div>
  );
};

export default injectIntl(Contact);
