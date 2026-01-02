import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import FloatingCard from "../controls/FloatingCard";
import ImageGalleryContainer from "../controls/ImageGalleryContainer";
import personalData from "../../resources/personalData";
import GithubIcon from "@/resources/icons/github.svg?react";
import LinkIcon from "@/resources/icons/link.svg?react";

const Portfolio = () => {
  useTranslation();
  const [galleryImages, setGalleryImages] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  return (
    <div id="portfolio" className="relative bg-dark py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="section-title">
          <Trans i18nKey="portfolio.title" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
          {personalData.portfolio.map((project, idx) => (
            <FloatingCard key={idx} className="flex flex-col" maxMove={[15, 15]}>
              <div className="flex flex-col h-full">
                {/* Title */}
                <h3 className="text-primary text-2xl mb-3">
                  <Trans i18nKey={project.titleId} />
                </h3>

                {/* Description */}
                <p className="text-light mb-4 flex-grow">
                  <Trans i18nKey={project.descriptionId} />
                </p>

                {/* Technologies */}
                {project.technologies.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-medium-dark text-primary rounded-full border border-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="mb-4 grid grid-cols-2 gap-2">
                    {project.screenshots.map((screenshot, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() =>
                          setGalleryImages({ images: project.screenshots, index: imgIdx })
                        }
                        className="relative group cursor-pointer overflow-hidden rounded border border-primary/30 hover:border-primary transition-colors"
                      >
                        <img
                          src={screenshot}
                          alt={`Screenshot ${imgIdx + 1}`}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <span className="text-light opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                            <Trans i18nKey="portfolio.clickToView" />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-primary/30">
                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-light hover:text-primary transition-colors"
                    >
                      <GithubIcon className="w-5 h-5 fill-current" />
                      <span className="text-sm">
                        <Trans i18nKey="portfolio.repository" />
                      </span>
                    </a>
                  )}
                  {project.productionUrl && (
                    <a
                      href={project.productionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-light hover:text-primary transition-colors"
                    >
                      <LinkIcon className="w-5 h-5 fill-current" />
                      <span className="text-sm">
                        <Trans i18nKey="portfolio.production" />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>

      {/* Image Gallery Modal */}
      {galleryImages && (
        <ImageGalleryContainer
          images={galleryImages.images}
          initialIndex={galleryImages.index}
          onClose={() => setGalleryImages(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
