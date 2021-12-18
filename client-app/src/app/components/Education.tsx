import "./Education.scss";
import React from "react";
import { FormattedMessage } from "react-intl";
import personalData from "../config/personalData";
import FloatingCard from "./FloatingCard";

const Education: React.FC = () => {
  const getDateRangeString = (startDate: Date, endDate: Date): string => {
    var startDateFormatted = startDate.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
    });
    var endDateFormatted = endDate.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
    });

    return `${startDateFormatted} - ${endDateFormatted}`;
  };

  return (
    <div id="education">
      <div className="container">
        <h2 className="section-title">
          <FormattedMessage id="education.title" />
        </h2>
        <div className="degrees">
          {personalData.education.map((step) => {
            return (
              <div className="degree" key={step.titleId}>
                <h3 className="degree-title">
                  <FormattedMessage id={step.titleId} />
                </h3>
                <FloatingCard className="degree-content">
                  <h3>
                    <FormattedMessage id={step.facultyId} />
                  </h3>
                  <h4>
                    <FormattedMessage id={step.schoolId} />
                  </h4>
                  <h5>
                    {getDateRangeString(step.startDate, step.endDate) + ", "}
                    <FormattedMessage id={step.locationId} />
                  </h5>
                  <p>
                    <FormattedMessage id={step.descriptionId} />
                  </p>
                </FloatingCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
