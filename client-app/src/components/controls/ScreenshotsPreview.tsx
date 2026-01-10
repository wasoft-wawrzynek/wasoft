import { ReactNode, useState } from "react";
import ChevronLeftIcon from "@/resources/icons/chevron-left.svg?react";
import ChevronRightIcon from "@/resources/icons/chevron-right.svg?react";

interface ScreenshotsPreviewProps {
  name: ReactNode;
  subtitle: ReactNode;
  screenshots: string[];
  onThumbnailClick: (index: number) => void;
}

const ScreenshotsPreview = ({
  name,
  subtitle,
  screenshots,
  onThumbnailClick,
}: ScreenshotsPreviewProps) => {
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
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-center">
        <h3 className="text-primary text-4xl font-bold mb-1">{name}</h3>
        <p className="text-light text-lg">{subtitle}</p>
      </div>

      <div className="w-[80%] flex items-center justify-center gap-3">
        {screenshots.length > 1 && (
          <button
            onClick={goToPrevious}
            className="p-0 text-light transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-8 h-8 fill-current" />
          </button>
        )}

        <div className="relative flex-1 h-[350px] group">
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
          </button>

          {/* Dot Indicators */}
          {screenshots.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-1 bg-black/50 rounded-full">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to image ${idx + 1}`}
                  className={`transition-all rounded-full ${
                    idx === currentIndex
                      ? "w-[8px] h-[8px] bg-primary"
                      : "w-[6px] h-[6px] bg-light/60 hover:bg-light"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {screenshots.length > 1 && (
          <button
            onClick={goToNext}
            className="p-0 text-light transition-colors"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-8 h-8 fill-current" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ScreenshotsPreview;
