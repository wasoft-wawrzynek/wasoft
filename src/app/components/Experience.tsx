import "./Experience.scss";
import React from "react";
import { FormattedMessage } from "react-intl";
import FloatingCard from "./FloatingCard";
import personalData from "../config/personalData";

const Experience: React.FC = () => {
  const technologiesToString = (technologies: string[]) => {
    return technologies.toString().replaceAll(",", " | ");
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
                    {job.startDate} - {job.endDate ? job.endDate : "now"}
                  </p>
                </div>
                <div className="job-roles">
                  {job.roles.map((role) => {
                    return (
                      <div className="role">
                        <div className="role-header">
                          <h3>{role.title}</h3>
                          <p>
                            {role.startDate} -{" "}
                            {role.endDate ? role.endDate : "now"}
                          </p>
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
