import React from "react";
import { FormattedMessage } from "react-intl";
import "./Education.scss";
import personalData from "../config/personalData";
import FloatingCard from "./FloatingCard";

const Education: React.FC = () => {
  return (
    <div id="education">
      <div className="container">
        <h2>
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
                  <p>
                    {step.startDate} - {step.endDate}
                  </p>
                </div>
                <p>
                  {step.school} ({step.location})
                </p>
                <h4>{step.description}</h4>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
