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
              <FloatingCard
                key={step.title}
                intervalMs={2000}
                maxMove={[20, 20]}
              >
                <div className="title">
                  <h3>{step.title}</h3>
                  <p>{getDateRangeString(step.startDate, step.endDate)}</p>
                </div>
                <h5>
                  {step.school} ({step.location})
                </h5>
                <p>{step.description}</p>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
