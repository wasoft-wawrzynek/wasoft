import { ReactNode, useState } from "react";
import { Trans } from "react-i18next";
import ChevronLeftIcon from "@/resources/icons/chevron-left.svg?react";
import ChevronRightIcon from "@/resources/icons/chevron-right.svg?react";

interface ScreenshotsPreviewProps {
  name: ReactNode;
  subtitle: ReactNode;
  screenshots: string[];
  onThumbnailClick: (index: number) => void;
}

const ScreenshotsPreview = ({ name, subtitle, screenshots, onThumbnailClick }: ScreenshotsPreviewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-center">
        <h3 className="text-primary text-4xl font-bold mb-1">
          {name}
        </h3>
        <p className="text-light text-lg">
          {subtitle}
        </p>
      </div>
      
      {/* Single Image Preview with Navigation */}
      <div className="relative w-[80%] h-[350px] group">
        {/* Main Image */}
        <button
          onClick={() => onThumbnailClick(currentIndex)}
          className="relative w-full h-full cursor-pointer overflow-hidden rounded border border-primary/30 hover:border-primary transition-colors bg-medium-dark/20"
        >
          <img
            src={screenshots[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <span className="text-light opacity-0 group-hover:opacity-100 transition-opacity text-sm">
              <Trans i18nKey="portfolio.clickToView" />
            </span>
          </div>
        </button>

        {/* Navigation Buttons */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 hover:bg-black/70 text-light rounded-full transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-6 h-6 fill-current" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 hover:bg-black/70 text-light rounded-full transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-6 h-6 fill-current" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {screenshots.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 text-light text-xs rounded-full">
            {currentIndex + 1} / {screenshots.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenshotsPreview;
