import "./Resume.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage, IntlProvider } from "react-intl";
import { jsPDF } from "jspdf";
import messages, { hasLanguage } from "../../lang/translations";
import initPdfFonts from "../../resources/pdfFonts.js";
import PrintPage from "./PrintPage";
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
        <PrintPage width={PAGE_WIDTH} height={PAGE_HEIGHT} />
      </div>
    </IntlProvider>
  );
}

export default Resume;
