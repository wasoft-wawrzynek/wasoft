import "./Experience.scss";
import React from "react";
import { FormattedMessage } from "react-intl";
import FloatingCard from "./FloatingCard";
import personalData from "../config/personalData";

const Experience: React.FC = () => {
  const technologiesToString = (technologies: string[]) => {
    return technologies.toString().replaceAll(",", " | ");
  };

  const getDateRangeString = (startDate?: Date, endDate?: Date): string => {
    var startDateFormatted = startDate?.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit"
    });
    var endDateFormatted = endDate
      ? endDate.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "2-digit",
        })
      : "now";

    return `${startDateFormatted} - ${endDateFormatted}`;
  };
  const getPeriodSting = (startDate: Date, endDate?: Date): string => {
    if (!endDate) endDate = new Date();

    var monthsDiff =
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear());

    var diff = { years: Math.floor(monthsDiff / 12), months: monthsDiff % 12 };
    return diff.years > 0
      ? `${diff.years}l, ${diff.months}m`
      : `${diff.months}m`;
  };

  return (
    <div id="experience">
      <div className="container">
        <h2 className="section-title">
          <FormattedMessage id="experience.title" />
        </h2>
        <div className="timeline">
          {personalData.experience.map((job) => {
            return (
              <FloatingCard
                key={job.company}
                className="job-card"
                intervalMs={2000}
                maxMove={[20, 20]}
              >
                <div className="job-header">
                  <h3>{job.company}</h3>
                  <p>
                    {getDateRangeString(
                      job.roles.at(-1)?.startDate,
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
                          <p>{getPeriodSting(role.startDate, role.endDate)}</p>
                        </div>
                        {role.technologies.length > 0 && (
                          <p className="technologies">
                            <span>[ </span>
                            {technologiesToString(role.technologies)}
                            <span> ]</span>
                          </p>
                        )}
                        <p>
                          <FormattedMessage id={role.descriptionId} />
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
