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
        <div className="header">
          <h1>{`Resume in ${lang} will come here`}</h1>
        </div>
      </div>
    </IntlProvider>
  );
}

export default Resume;
