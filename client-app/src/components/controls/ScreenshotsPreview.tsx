import { ReactNode, useCallback, useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import ChevronLeftIcon from "@/resources/icons/chevron-left.svg?react";
import ChevronRightIcon from "@/resources/icons/chevron-right.svg?react";

interface ScreenshotsPreviewProps {
  name: ReactNode;
  subtitle: ReactNode;
  dateRange?: string;
  screenshots: string[];
  onThumbnailClick: (index: number) => void;
}

const ScreenshotsPreview = ({
  name,
  subtitle,
  dateRange,
  screenshots,
  onThumbnailClick,
}: ScreenshotsPreviewProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-center">
        <h3 className="text-primary text-4xl font-bold mb-1">{name}</h3>
        <p className="text-light text-lg">{subtitle}</p>
        {dateRange && (
          <div className="flex items-center justify-center gap-2 mt-2 text-light/80 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{dateRange}</span>
          </div>
        )}
      </div>

      <div className="w-[80%] relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-10">
                <button
                  onClick={() => onThumbnailClick(index)}
                  className="relative w-full h-[350px] cursor-pointer overflow-hidden rounded border border-primary/30 hover:border-primary transition-colors bg-medium-dark/20 flex items-center justify-center"
                >
                  <img
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {screenshots.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-0 text-light hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-8 h-8 fill-current" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-0 text-light hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-8 h-8 fill-current" />
            </button>
          </>
        )}

        {screenshots.length > 1 && (
          <div className="flex justify-center gap-1.5 mt-4">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className="p-0 m-0 border-0 bg-transparent cursor-pointer"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`block transition-all rounded-full ${
                    index === selectedIndex
                      ? "w-6 h-2 bg-primary"
                      : "w-4 h-2 bg-white/60 hover:bg-white/90"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenshotsPreview;
