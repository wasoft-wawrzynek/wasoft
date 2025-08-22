import "./Hobby.scss";
import { FormattedMessage } from "react-intl";
import personalData from "../../resources/personalData";
import { values } from "../../resources/translations";
import FloatingCard from "../controls/FloatingCard";

const Hobby = () => {
  return (
    <div id="hobby">
      <div className="container">
        <h2 className="section-title">
          <FormattedMessage id="hobby.title" />
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
                      <FormattedMessage id={activity.titleId} />
                    </h3>
                    <p className="desc">
                      <FormattedMessage
                        id={activity.descriptionId}
                        values={values}
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
