import "./Experience.scss";
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
    <div id="experience">
      <div className="container">
        <h2 className="section-title">
          <Trans i18nKey="experience.title" />
        </h2>
        <div className="timeline">
          {personalData.experience.map((job) => {
            return (
              <FloatingCard key={job.company} className="job-card">
                <div className="job-header">
                  <h3>
                    {job.company}{" "}
                    <span>
                      (<Trans i18nKey={job.locationId} />)
                    </span>
                  </h3>
                  <p>
                    {getDateRangeString(
                      job.roles[job.roles.length - 1]?.startDate,
                      job.roles[0].endDate
                    )}
                  </p>
                </div>
                <div className="job-roles">
                  {job.roles.map((role) => {
                    return (
                      <div className="role" key={role.title}>
                        <div className="role-header">
                          <h3>{role.title}</h3>
                          <p>
                            {getPeriodSting(
                              role.startDate,
                              role.endDate
                            )}
                          </p>
                        </div>
                        {role.technologies.length > 0 && (
                          <p className="tech">
                            <span>[ </span>
                            {technologiesToString(role.technologies)}
                            <span> ]</span>
                          </p>
                        )}
                        <p className="desc">
                          <Trans i18nKey={role.descriptionId} components={substitutes} />
                        </p>
                      </div>
                    );
                  })}
                </div>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
