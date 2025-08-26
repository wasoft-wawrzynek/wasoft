import "./Resume.scss";
import { Trans, useTranslation } from "react-i18next";
import { jsPDF } from "jspdf";
// @ts-ignore
import initPdfFonts from "../../resources/pdfFonts.js";
import PrintPage from "./PrintPage";
import DownloadIcon from '../../icons/download.svg?react';
import LanguageSelector from "../controls/LanguageSelector";

const A4_RATIO = 1.414285714285714;
const PAGE_WIDTH = 1000;
const PAGE_HEIGHT = PAGE_WIDTH * A4_RATIO;

const Resume = () => {
  const { i18n } = useTranslation();

  const generatePdf = () => {
    const element = document.getElementById("pdf-page");
    if (!element) return;

    initPdfFonts();

    let doc = new jsPDF("p", "pt", [PAGE_WIDTH, PAGE_HEIGHT]);
    doc.html(element, {
      callback: () => {
        doc.save(`PawelWawrzynek_resume_${i18n.language?.toUpperCase()}.pdf`);
      },
    });
  };

  return (
    <div id="resume">
      <div className="controls">
        <LanguageSelector />
        <button className="download" onClick={() => generatePdf()}>
          <DownloadIcon className="icon" />
          <h3 className="desc">
            <Trans i18nKey="resume.print" />
          </h3>
        </button>
      </div>
      <PrintPage width={PAGE_WIDTH} height={PAGE_HEIGHT} />
    </div>
  );
}

export default Resume;
