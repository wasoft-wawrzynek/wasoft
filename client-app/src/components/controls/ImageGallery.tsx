import ChevronLeftIcon from "@/resources/icons/chevron-left.svg?react";
import ChevronRightIcon from "@/resources/icons/chevron-right.svg?react";
import CloseIcon from "@/resources/icons/close.svg?react";
import { useImageGallery } from "./useImageGallery";

interface ImageGalleryProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ImageGallery = ({ images, currentIndex, onClose, onNext, onPrevious }: ImageGalleryProps) => {
  useImageGallery({ onClose, onNext, onPrevious });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-light hover:text-primary transition-colors z-10"
        aria-label="Close gallery"
      >
        <CloseIcon className="w-8 h-8 fill-current" />
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 p-2 text-light hover:text-primary transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="w-12 h-12 fill-current" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain rounded border-2 border-primary/50"
        />
        
        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 text-light rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 p-2 text-light hover:text-primary transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRightIcon className="w-12 h-12 fill-current" />
        </button>
      )}
    </div>
  );
};

export default ImageGallery;
