import { Trans } from "react-i18next";
import DownloadIcon from '@/resources/icons/download.svg?react';
import LanguageSelector from "../controls/LanguageSelector";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
// @ts-ignore
import initPdfFonts from "@/resources/pdfFonts.js";

interface NavigationProps {
  onPrint?: () => void;
}

const Navigation = ({ onPrint }: NavigationProps) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full h-18 flex items-center justify-between bg-dark px-4 z-30 shadow mb-6">
      <div className="container h-full mx-auto flex items-center justify-between px-8">
        <button
          className="flex items-center text-light hover:text-primary transition-colors"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <ArrowLeftIcon className="w-8 h-8 mr-2" />
          <h5 className="hidden md:inline">
            <Trans i18nKey={"resume.back"} />
          </h5>
        </button>
        <button
          className="group flex items-center md:gap-2 px-2 py-2 text-light border-primary md:border-light border rounded hover:bg-primary hover:border-primary hover:text-dark transition-colors"
          onClick={onPrint}
        >
          <DownloadIcon className="fill-primary group-hover:fill-dark transition-colors" />
          <h3 className="hidden md:inline uppercase text-center text-xl pt-1">
            <Trans i18nKey="resume.print" />
          </h3>
        </button>
        <div className="flex items-center">
          <LanguageSelector side="bottom" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;