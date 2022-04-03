import "./Resume.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage, IntlProvider } from "react-intl";
import { jsPDF } from "jspdf";
import messages, { hasLanguage } from "../../lang/translations";
import initPdfFonts from "../../resources/pdfFonts.js";
import personalData from "../../resources/personalData";
import Title from "./Title";
import { ReactComponent as DownloadIcon } from "../../icons/download.svg";

const A4_RATIO = 1.414285714285714;
const PAGE_WIDTH = 1000;
const PAGE_HEIGHT = PAGE_WIDTH * A4_RATIO;

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

    let doc = new jsPDF("p", "pt", [PAGE_WIDTH, PAGE_HEIGHT]);
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
        <div
          id="pdf-page"
          style={{ width: `${PAGE_WIDTH}px`, height: `${PAGE_HEIGHT - 1}px` }}
        >
          <div className="profile">
            <div className="img-bubble">
              <img src="/img/profile.png" alt="logo" />
            </div>
          </div>
          <div className="header">
            <div className="header-content">
              <h2>Paweł Wawrzynek</h2>
              <hr />
              <h4>.NET Developer</h4>
            </div>
          </div>
          <div className="resume-section about-me">
            <Title textId="resume.about-me" />
            <div className="info-item">
              <img className="icon" src="/img/resume/birth.png" />
              <p>
                {personalData.dateOfBirth.toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
            </div>
            <div className="info-item">
              <img className="icon" src="/img/resume/language.png" />
              <div>
                {personalData.languages.map((l) => {
                  return (
                    <p key={l.languageId}>
                      <FormattedMessage id={l.languageId} />
                      {" - "}
                      <FormattedMessage id={l.level} />
                    </p>
                  );
                })}
              </div>
            </div>
            {personalData.aboutMeId.map((paragraph) => {
              return (
                <p key={paragraph}>
                  <FormattedMessage id={paragraph} />
                </p>
              );
            })}
          </div>
          <div className="resume-section experience">
            <Title textId="header.experience" />
          </div>
          <div className="resume-section contact">
            <Title textId="header.contact" />
            <div className="info-item">
              <img className="icon" src="/img/resume/phone.png" />
              <p>{personalData.contact.telephone}</p>
            </div>
            <div className="info-item">
              <img className="icon" src="/img/resume/address.png" />
              <p>
                {`${personalData.contact.street}, ${personalData.contact.postCode} ${personalData.contact.city}`}
              </p>
            </div>
            <div className="info-item">
              <img className="icon" src="/img/resume/email.png" />
              <p>{personalData.contact.mail}</p>
            </div>
            <div className="info-item">
              <img className="icon" src="/img/resume/website.png" />
              <p>{personalData.contact.website}</p>
            </div>
            <div className="info-item">
              <img className="icon" src="/img/resume/linkedIn.png" />
              <p>{personalData.contact.linkedIn}</p>
            </div>
          </div>
          <div className="resume-section education">
            <Title textId="header.education" />
          </div>
          <div className="resume-section soft-skills"></div>
          <div className="resume-section tech-skills"></div>
          <div className="resume-section hobbies">
            <Title textId="header.hobby" />
          </div>
        </div>
      </div>
    </IntlProvider>
  );
}

export default Resume;
