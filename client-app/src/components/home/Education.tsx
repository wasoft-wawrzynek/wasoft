import "./Education.scss";
import { Trans, useTranslation } from "react-i18next";
import personalData from "../../resources/personalData";
import FloatingCard from "../controls/FloatingCard";

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

const Education = () => {
  useTranslation();

  return (
    <div id="education">
      <div className="container">
        <h2 className="section-title">
          <Trans i18nKey="education.title" />
        </h2>
        <div className="degrees">
          {personalData.education.map((step) => {
            return (
              <div className="degree" key={step.titleId}>
                <h3 className="degree-title">
                  <Trans i18nKey={step.titleId} />
                </h3>
                <FloatingCard className="degree-content">
                  <h3>
                    <Trans i18nKey={step.facultyId} />
                  </h3>
                  <h4>
                    <Trans i18nKey={step.schoolId} />
                  </h4>
                  <h5>
                    {getDateRangeString(step.startDate, step.endDate) + ", "}
                    <Trans i18nKey={step.locationId} />
                  </h5>
                  <p>
                    <Trans i18nKey={step.descriptionId} />
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
