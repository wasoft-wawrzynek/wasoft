import { useState } from "react";
import { useTranslation } from "react-i18next";
import { jsPDF } from "jspdf";
// @ts-ignore
import initPdfFonts from "@/resources/pdfFonts.js";
import PrintPage from "./PrintPage";
import Navigation from "./Navigation";

const PAGE_WIDTH = 1000;
const PAGE_HEIGHT = PAGE_WIDTH * 1.414285714285714;

const Resume = () => {
  const { i18n } = useTranslation();
  const [pdfExport, setPdfExport] = useState(false);

  const generatePdf = () => {
    setPdfExport(true);
    const element = document.getElementById("pdf-page");
    if (!element) return;

    initPdfFonts();

    let doc = new jsPDF("p", "pt", [PAGE_WIDTH, PAGE_HEIGHT]);
    doc.html(element, {
      callback: () => {
        doc.save(`PawelWawrzynek_resume_${i18n.language?.toUpperCase()}.pdf`);
        setPdfExport(false);
      },
    });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Navigation onPrint={generatePdf} />
      <div className="pt-20 w-full flex flex-col items-center">
        <PrintPage width={PAGE_WIDTH} height={PAGE_HEIGHT} isPdf={pdfExport} />
      </div>
    </div>
  );
};

export default Resume;
