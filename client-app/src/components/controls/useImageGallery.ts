import { useEffect } from "react";

interface UseImageGalleryProps {
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

/**
 * Custom hook for image gallery keyboard navigation and body scroll lock
 */
export const useImageGallery = ({ onClose, onNext, onPrevious }: UseImageGalleryProps) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Prevent body scroll when gallery is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
};
