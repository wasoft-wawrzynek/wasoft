import "./Hobby.scss";
import { Trans, useTranslation } from "react-i18next";
import personalData from "../../resources/personalData";
import FloatingCard from "../controls/FloatingCard";
import { substitutes } from "@/resources/translations";

const Hobby = () => {
  useTranslation();

  return (
    <div id="hobby">
      <div className="container">
        <h2 className="section-title">
          <Trans i18nKey="hobby.title" />
        </h2>
        <div className="activities">
          {personalData.hobby.map((activity) => {
            return (
              <FloatingCard
                className="activity-card"
                key={activity.titleId}
                maxMove={[15, 15]}
              >
                <div className="activity-content">
                  <div className="img-bubble">
                    <div className="img-box">
                      <img src={activity.icon} alt="" />
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="title">
                      <Trans i18nKey={activity.titleId} />
                    </h3>
                    <p className="desc">
                      <Trans i18nKey={activity.descriptionId} components={substitutes} />
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
