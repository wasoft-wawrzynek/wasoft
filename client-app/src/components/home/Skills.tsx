import "./Skills.scss";
import { FormattedMessage } from "react-intl";
import personalData from "../../resources/personalData";
import FloatingCard from "../controls/FloatingCard";
import Level1 from "../../icons/level-1.svg?react";
import Level2 from "../../icons/level-2.svg?react";
import Level3 from "../../icons/level-3.svg?react";
import Level4 from "../../icons/level-4.svg?react";

// interface SkillIcons {
//   key: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;
//   solid: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;
//   promising: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;
//   basic: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;
// }

// const sections = ["key", "solid", "promising", "basic"];
// const icons: SkillIcons = {
//   key: <Level4 className="icon" />,
//   solid: <Level3 className="icon" />,
//   promising: <Level2 className="icon" />,
//   basic: <Level1 className="icon" />,
// };

const Skills = () => {
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
          {/* {sections.map((section) => {
            return (
              <div className="group">
                <div className="group-header">
                  {icons[section]}
                  <h2 className="name">
                    <FormattedMessage id={`skills.${section}`} />
                  </h2>
                </div>
                <div className="list">
                  {personalData.skills[section].map((skill) => {
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
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
