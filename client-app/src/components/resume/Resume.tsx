import "./Resume.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IntlProvider } from "react-intl";
import messages, { hasLanguage } from "../../lang/translations";

function Resume() {
  const { lang } = useParams();
  const [locale, setLocale] = useState("pl");

  useEffect(() => {
    if (lang && hasLanguage(lang)) {
      setLocale(lang);
    }
  });

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div id="resume">
        <div className="profile">
          <div className="img-bubble">
            <img src="/img/profile.png" alt="logo" />
          </div>
        </div>
        <div className="title">
          <div className="title-content">
            <h2>Paweł Wawrzynek</h2>
            <hr />
            <h4>.NET Developer</h4>
          </div>
        </div>
        <div className="about-me"></div>
        <div className="experience"></div>
        <div className="contact"></div>
        <div className="education"></div>
        <div className="soft-skills"></div>
        <div className="tech-skills"></div>
        <div className="hobbies"></div>
      </div>
    </IntlProvider>
  );
}

export default Resume;
