import "./Skills.scss";
import { useTransition } from "react";
import { Trans } from "react-i18next";
import personalData from "../../resources/personalData";
import FloatingCard from "../controls/FloatingCard";
import Level1 from "@/resources/icons/level-1.svg?react";
import Level2 from "@/resources/icons/level-2.svg?react";
import Level3 from "@/resources/icons/level-3.svg?react";
import Level4 from "@/resources/icons/level-4.svg?react";

const Skills = () => {
  useTransition();

  return (
    <div id="skills">
      <div className="container mx-auto py-8">
        <h2 className="section-title">
          <Trans i18nKey="skills.title" />
        </h2>
        <div className="groups">
          <div className="group key">
            <div className="group-header">
              <Level4 className="icon" />
              <h2 className="name">
                <Trans i18nKey="skills.key" />
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
                <Trans i18nKey="skills.solid" />
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
                <Trans i18nKey="skills.promising" />
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
                <Trans i18nKey="skills.basic" />
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
