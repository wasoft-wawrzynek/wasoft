import "./Resume.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage, IntlProvider } from "react-intl";
import { jsPDF } from "jspdf";
import messages, { hasLanguage } from "../../lang/translations";
import initPdfFonts from "../../resources/pdfFonts.js";
import { ReactComponent as DownloadIcon } from "../../icons/download.svg";
import Title from "./Title";

const PAGE_WIDTH = 1000;
const A4_RATIO = 1.414285714285714;

function Resume() {
  const { lang } = useParams();
  const [locale, setLocale] = useState("pl");

  useEffect(() => {
    if (lang && hasLanguage(lang)) {
      setLocale(lang);
    }
  });

  const generatePdf = () => {
    const element = document.getElementById("pdf-page");
    if (!element) return;

    initPdfFonts();

    let doc = new jsPDF("p", "pt", [PAGE_WIDTH, PAGE_WIDTH * A4_RATIO]);
    doc.html(element, {
      callback: () => {
        doc.save(`PawelWawrzynek_resume_${lang?.toUpperCase()}.pdf`);
      },
    });
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div id="resume">
        <div className="controls">
          <button className="download" onClick={() => generatePdf()}>
            <DownloadIcon className="icon" />
            <h3 className="desc">
              <FormattedMessage id="resume.print" />
            </h3>
          </button>
        </div>
        <div id="pdf-page" style={{ width: `${PAGE_WIDTH}px` }}>
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
          <div className="experience">
            <Title textId="header.experience" />
          </div>
          <div className="contact"></div>
          <div className="education"></div>
          <div className="soft-skills"></div>
          <div className="tech-skills"></div>
          <div className="hobbies"></div>
        </div>
      </div>
    </IntlProvider>
  );
}

export default Resume;
