import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";
import FloatingCard from "../controls/FloatingCard";
import ImageGalleryContainer from "../controls/ImageGalleryContainer";
import ScreenshotsPreview from "../controls/ScreenshotsPreview";
import personalData from "../../resources/personalData";
import { getDateRangeString } from "../../helpers/stringHelpers";
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
        <div className="flex flex-col gap-16 w-full mt-12">
          {personalData.portfolio.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Screenshots Card */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="w-full md:w-[40%]">
                    <ScreenshotsPreview
                      name={<Trans i18nKey={project.nameId} />}
                      subtitle={<Trans i18nKey={project.subtitleId} />}
                      dateRange={getDateRangeString(project.startDate, project.endDate)}
                      screenshots={project.screenshots}
                      onThumbnailClick={(index) =>
                        setGalleryImages({ images: project.screenshots, index })
                      }
                    />
                  </div>
                )}

                {/* Content Card */}
                <FloatingCard className="w-full md:w-[60%] flex flex-col" maxMove={[0, 0]}>
                  <div className="flex flex-col h-full">
                    {/* Mobile Title - Only when screenshots exist */}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <div className="md:hidden mb-3 text-center">
                        <h3 className="text-primary text-3xl font-bold mb-1">
                          <Trans i18nKey={project.nameId} />
                        </h3>
                        <p className="text-light text-base">
                          <Trans i18nKey={project.subtitleId} />
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-2 text-light/80 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{getDateRangeString(project.startDate, project.endDate)}</span>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-light mb-4 flex-grow whitespace-pre-line">
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
              </div>
            );
          })}
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
