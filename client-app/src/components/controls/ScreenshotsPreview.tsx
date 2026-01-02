import { ReactNode } from "react";
import { Trans } from "react-i18next";

interface ScreenshotsPreviewProps {
  name: ReactNode;
  subtitle: ReactNode;
  screenshots: string[];
  onThumbnailClick: (index: number) => void;
}

const ScreenshotsPreview = ({ name, subtitle, screenshots, onThumbnailClick }: ScreenshotsPreviewProps) => {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

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
      <div className="grid grid-cols-2 gap-2 w-[80%]">
        {screenshots.map((screenshot, idx) => (
          <button
            key={idx}
            onClick={() => onThumbnailClick(idx)}
            className="relative group cursor-pointer overflow-hidden rounded border border-primary/30 hover:border-primary transition-colors aspect-square"
          >
            <img
              src={screenshot}
              alt={`Screenshot ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="text-light opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                <Trans i18nKey="portfolio.clickToView" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotsPreview;
