import "./Skills.scss";
import { FormattedMessage } from "react-intl";
import personalData from "../../resources/personalData";
import FloatingCard from "../controls/FloatingCard";
import { ReactComponent as Level1 } from "../../icons/level-1.svg";
import { ReactComponent as Level2 } from "../../icons/level-2.svg";
import { ReactComponent as Level3 } from "../../icons/level-3.svg";
import { ReactComponent as Level4 } from "../../icons/level-4.svg";

function Skills() {
  return (
    <div id="skills">
      <div className="container">
        <h2 className="section-title">
          <FormattedMessage id="skills.title" />
        </h2>
        <div className="groups">
          <div className="group key">
            <div className="group-header">
              <Level4 className="icon" />
              <h2 className="name">
                <FormattedMessage id="skills.key" />
              </h2>
            </div>
            <div className="list">
              {personalData.skills.key.map((skill) => {
                return (
                  <FloatingCard
                    key={skill}
                    className="skill-card"
                    maxMove={[8, 8]}
                  >
                    <h4 className="skill-name">{skill}</h4>
                  </FloatingCard>
                );
              })}
            </div>
          </div>
          <div className="group solid">
            <div className="group-header">
              <Level3 className="icon" />
              <h2 className="name">
                <FormattedMessage id="skills.solid" />
              </h2>
            </div>
            <div className="list">
              {personalData.skills.solid.map((skill) => {
                return (
                  <FloatingCard
                    key={skill}
                    className="skill-card"
                    maxMove={[8, 8]}
                  >
                    <h4 className="skill-name">{skill}</h4>
                  </FloatingCard>
                );
              })}
            </div>
          </div>
          <div className="group promising">
            <div className="group-header">
              <Level2 className="icon" />
              <h2 className="name">
                <FormattedMessage id="skills.promising" />
              </h2>
            </div>
            <div className="list">
              {personalData.skills.promising.map((skill) => {
                return (
                  <FloatingCard
                    key={skill}
                    className="skill-card"
                    maxMove={[8, 8]}
                  >
                    <h4 className="skill-name">{skill}</h4>
                  </FloatingCard>
                );
              })}
            </div>
          </div>
          <div className="group basic">
            <div className="group-header">
              <Level1 className="icon" />
              <h2 className="name">
                <FormattedMessage id="skills.basic" />
              </h2>
            </div>
            <div className="list">
              {personalData.skills.basic.map((skill) => {
                return (
                  <FloatingCard
                    key={skill}
                    className="skill-card"
                    maxMove={[8, 8]}
                  >
                    <h4 className="skill-name">{skill}</h4>
                  </FloatingCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
