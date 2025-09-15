import { Trans, useTranslation } from "react-i18next";
import FloatingCard from "../controls/FloatingCard";
import personalData from "../../resources/personalData";
import { substitutes } from "../../resources/translations";
import {
  getDateRangeString,
  getPeriodSting,
} from "../../helpers/stringHelpers";

const technologiesToString = (technologies: string[]) => {
  return technologies.toString().replace(/,/g, " | ");
};

const Experience = () => {
  useTranslation();

  return (
    <div id="experience" className="relative bg-medium-dark py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="section-title">
          <Trans i18nKey="experience.title" />
        </h2>
        <div className="relative w-full flex flex-col items-center mt-12">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-primary rounded" />
          <div className="md:hidden absolute left-4 top-0 h-full w-2 bg-primary rounded" />
          {personalData.experience.map((job, idx) => {
            // Alternate left/right on desktop, always left on mobile
            const isRight = idx % 2 === 1;
            return (
              <div
                key={job.company}
                className={`relative flex flex-col w-full md:w-1/2 mb-12 ${isRight ? "md:self-end md:pr-12" : "md:self-start md:pl-12"}`}>
                {/* Timeline dot */}
                <div
                  className={`absolute top-8 w-6 h-6 rounded-full bg-primary border-4 border-medium-dark ${isRight ? "md:-left-3" : "md:-right-3 md:left-auto"} left-2`}
                />
                <FloatingCard className="p-6 pl-10 md:pl-6">
                  <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-primary">
                      {job.company}{" "}
                      <span className="text-medium-light text-base font-normal">
                        (<Trans i18nKey={job.locationId} />)
                      </span>
                    </h3>
                    <p className="text-light mt-1 md:mt-0">
                      {getDateRangeString(
                        job.roles[job.roles.length - 1]?.startDate,
                        job.roles[0].endDate
                      )}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 border-t border-primary pt-4">
                    {job.roles.map((role) => (
                      <div className="mb-2" key={role.title}>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <h3 className="text-lg font-semibold">{role.title}</h3>
                          <p className="text-light text-sm mt-1 md:mt-0">
                            {getPeriodSting(role.startDate, role.endDate)}
                          </p>
                        </div>
                        {role.technologies.length > 0 && (
                          <p className="text-primary mb-1">
                            <span className="text-sm">[ {technologiesToString(role.technologies)} ]</span>
                          </p>
                        )}
                        <p className="text-light">
                          <Trans i18nKey={role.descriptionId} components={substitutes} />
                        </p>
                      </div>
                    ))}
                  </div>
                </FloatingCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
