import React from "react";
import { FormattedMessage } from "react-intl";
import personalData from "../config/personalData";
import { values } from "../config/translations";
import FloatingCard from "./FloatingCard";
import "./Hobby.scss";

const Hobby: React.FC = () => {
  return (
    <div id="hobby">
      <div className="container">
        <h2 className="section-title">
          <FormattedMessage id="hobby.title" />
        </h2>
        <div className="activities">
          {personalData.hobby.map((activiy) => {
            return (
              <FloatingCard
                className="activity-card"
                maxMove={[15, 15]}
              >
                <div className="activity-content">
                  <div className="img-bubble">
                    <div className="img-box">
                      <img src={activiy.imgSrc} alt="" />
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="title">
                      <FormattedMessage id={activiy.titleId} />
                    </h3>
                    <p className="desc">
                      <FormattedMessage
                        id={activiy.descriptionId}
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
