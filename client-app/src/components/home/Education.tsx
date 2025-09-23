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
    <div id="education" className="relative bg-medium-dark">
      <div className="container mx-auto py-8 flex flex-col items-center justify-center">
        <h2 className="section-title">
          <Trans i18nKey="education.title" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {personalData.education.map((step) => {
            return (
              <div className="flex flex-col" key={step.titleId}>
                <h3 className="text-medium-light self-center my-4">
                  <Trans i18nKey={step.titleId} />
                </h3>
                <FloatingCard className="flex flex-col items-center pl-6 md:pl-0" maxMove={[15, 15]}>
                  <h3 className="text-primary text-2xl mb-4 w-full text-end">
                    <Trans i18nKey={step.facultyId} />
                  </h3>
                  <h4 className="w-full mb-2">
                    <Trans i18nKey={step.schoolId} />
                  </h4>
                  <h5 className="text-medium-light mb-4 w-full">
                    {getDateRangeString(step.startDate, step.endDate) + ", "}
                    <Trans i18nKey={step.locationId} />
                  </h5>
                  <p className="text-center w-full">
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
