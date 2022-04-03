import "./Experience.scss";
import React from "react";
import {
  FormattedMessage,
  injectIntl,
  WrappedComponentProps,
} from "react-intl";
import FloatingCard from "../controls/FloatingCard";
import personalData from "../../resources/personalData";
import { values } from "../../lang/translations";
import {
  getDateRangeString,
  getPeriodSting,
} from "../../helpers/stringHelpers";

const Experience: React.FC<WrappedComponentProps> = (props) => {
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
              <FloatingCard key={job.company} className="job-card">
                <div className="job-header">
                  <h3>
                    {job.company}{" "}
                    <span>
                      (<FormattedMessage id={job.locationId} />)
                    </span>
                  </h3>
                  <p>
                    {getDateRangeString(
                      props.intl,
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
                          <p>
                            {getPeriodSting(
                              props.intl,
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
                          <FormattedMessage
                            id={role.descriptionId}
                            values={values}
                          />
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

export default injectIntl(Experience);
