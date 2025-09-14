import { Trans, useTranslation } from "react-i18next";
import personalData from "../../resources/personalData";
import FloatingCard from "../controls/FloatingCard";
import { substitutes } from "@/resources/translations";

const Hobby = () => {
  useTranslation();

  return (
    <div className="relative">
      <div className="container mx-auto py-8">
        <h2 className="section-title">
          <Trans i18nKey="hobby.title" />
        </h2>
        <div className="flex flex-col gap-15 pt-8">
          {personalData.hobby.map((activity, idx) => {
            // Even: right, Odd: left (for alternating layout)
            const isEven = idx % 2 === 1;
            return (
              <FloatingCard
                className={`mx-4 md:max-w-[50%] md:mx-15 md:self-${isEven ? "end" : "start"}`}
                key={activity.titleId}
                maxMove={[15, 15]}
              >
                <div className={`relative flex items-center flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  {/* Bubble image */}
                  <div
                    className="absolute border-4 border-primary bg-dark rounded-full overflow-hidden h-30 w-30 -m-15">
                    <div className="w-full h-full p-[15%] flex items-center justify-center">
                      <img
                        src={activity.icon}
                        alt=""
                        className="h-full mx-auto block"
                      />
                    </div>
                  </div>
                  {/* Content */}
                  <div
                    className={`p-4 pt-18 md:pt-4 text-center ${isEven
                      ? `md:ml-4 md:mr-15 md:text-left`
                      : `md:ml-15 md:mr-4 md:text-right`
                      }`}
                  >
                    <h3 className="text-primary mb-4">
                      <Trans i18nKey={activity.titleId} />
                    </h3>
                    <p className="text-light">
                      <Trans
                        i18nKey={activity.descriptionId}
                        components={substitutes}
                      />
                    </p>
                  </div>
                </div>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hobby;
