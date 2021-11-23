import "./Experience.scss";
import React from "react";
import { FormattedMessage } from "react-intl";
import FloatingCard from "./FloatingCard";
import personalData from "../config/personalData";

const Experience: React.FC = () => {
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
                <div className="title">
                  <h3>{job.company}</h3>
                  <p>
                    {job.startDate} - {job.endDate ? job.endDate : "now"}
                  </p>
                </div>
                <p>{job.roles[0]?.title}</p>
                <h4>{job.roles[0]?.description}</h4>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
