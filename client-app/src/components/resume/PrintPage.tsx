import "./PrintPage.scss";
import { Trans } from "react-i18next";
import { substitutes } from "../../resources/translations";
import personalData from "../../resources/personalData";
import Title from "./Title";
import {
  getDateRangeString,
  getPeriodSting,
} from "../../helpers/stringHelpers";

interface IPageProps {
  width: number;
  height: number;
}

const PrintPage = (props: IPageProps) => {
  return (
    <div
      id="pdf-page"
      style={{
        width: `${props.width}px`,
        height: `${Math.floor(props.height)}px`,
      }}
    >
      <div className="profile">
        <div className="img-bubble">
          <img src="/img/profile.png" alt="logo" />
        </div>
      </div>
      <div className="header">
        <div className="header-content">
          <h2>Paweł Wawrzynek</h2>
          <hr />
          <h4>.NET Developer / Team leader</h4>
        </div>
      </div>
      <div className="resume-section about-me">
        <Title textId="resume.about-me" />
        <div className="info-item">
          <img className="icon" src="/img/resume/birth.png" alt="birthday" />
          <p>
            {personalData.dateOfBirth.toLocaleDateString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
        <div className="info-item">
          <img
            className="icon"
            src="/img/resume/language.png"
            alt="languages"
          />
          <div>
            {personalData.languages.map((l) => {
              return (
                <p key={l.languageId}>
                  <Trans i18nKey={l.languageId} />
                  {" - "}
                  <Trans i18nKey={l.level} />
                </p>
              );
            })}
          </div>
        </div>
        {personalData.aboutMeId.map((paragraph) => {
          return (
            <p className="paragraph" key={paragraph}>
              <Trans i18nKey={paragraph} />
            </p>
          );
        })}
      </div>
      <div className="resume-section experience">
        <Title textId="header.experience" />
        <div className="timeline">
          {personalData.experience.map((job) => {
            return (
              <div key={job.company} className="timeline-item">
                <div className="dates">
                  <p>
                    {getDateRangeString(
                      job.roles[job.roles.length - 1]?.startDate,
                      job.roles[0].endDate
                    )}
                  </p>
                </div>
                <div className="line"></div>
                <div className="desc">
                  <h3 className="title">{`/ ${job.company} /`}</h3>
                  {job.roles.map((role) => {
                    return (
                      <>
                        <h3 className="sub-title">{`${role.title
                          } - ${getPeriodSting(
                            role.startDate,
                            role.endDate
                          )}`}</h3>
                        <p className="text">
                          <Trans
                            i18nKey={role.descriptionId}
                            components={substitutes}
                          />
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="resume-section contact">
        <Title textId="header.contact" />
        <div className="info-item">
          <img className="icon" src="/img/resume/phone.png" alt="phone" />
          <p>{personalData.contact.telephone}</p>
        </div>
        <div className="info-item">
          <img className="icon" src="/img/resume/address.png" alt="address" />
          <p>
            {`${personalData.contact.street}, ${personalData.contact.postCode} ${personalData.contact.city}`}
          </p>
        </div>
        <div className="info-item">
          <img className="icon" src="/img/resume/email.png" alt="email" />
          <p>{personalData.contact.mail}</p>
        </div>
        <div className="info-item">
          <img className="icon" src="/img/resume/website.png" alt="website" />
          <p>{personalData.contact.website}</p>
        </div>
        <div className="info-item">
          <img
            className="icon"
            src="/img/resume/linked-in.png"
            alt="linked-in"
          />
          <p>{personalData.contact.linkedIn}</p>
        </div>
      </div>
      <div className="resume-section education">
        <Title textId="header.education" />
        <div className="timeline">
          {personalData.education.map((school) => {
            return (
              <div key={school.titleId} className="timeline-item">
                <div className="dates">
                  <p>
                    {getDateRangeString(school.startDate, school.endDate)}
                  </p>
                </div>
                <div className="line"></div>
                <div className="desc">
                  <h3 className="title">
                    <Trans i18nKey={school.titleId} />
                    {" - "}
                    <Trans i18nKey={school.facultyId} />
                  </h3>
                  <p className="text">
                    <Trans i18nKey={school.schoolId} />
                    {", "}
                    <Trans i18nKey={school.locationId} />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="resume-section hobbies">
        <Title textId="header.hobby" />
        <div className="items">
          {personalData.hobby.map((hobby) => {
            return (
              <div key={hobby.titleId} className="item">
                <div className="icon">
                  <img src={hobby.image} alt={hobby.titleId} />
                </div>
                <p className="name">
                  <Trans i18nKey={hobby.titleId} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="resume-section skills">
        <Title textId="header.skills" />
        <div className="groups">
          <div className="skill-group key">
            <div className="group-header">
              <img src="/img/resume/level-4.png" alt="Level Top" />
              <h2 className="group-name">
                <Trans i18nKey="skills.key" />
              </h2>
            </div>
            <div className="list">
              {personalData.skills.key.map((skill) => {
                return <p className="skill-name">{skill}</p>;
              })}
            </div>
          </div>
          <div className="skill-group solid">
            <div className="group-header">
              <img src="/img/resume/level-3.png" alt="Level Medium" />
              <h2 className="group-name">
                <Trans i18nKey="skills.solid" />
              </h2>
            </div>
            <div className="list">
              {personalData.skills.solid.map((skill) => {
                return <p className="skill-name">{skill}</p>;
              })}
            </div>
          </div>
          <div className="skill-group promising">
            <div className="group-header">
              <img src="/img/resume/level-2.png" alt="Level Low" />
              <h2 className="group-name">
                <Trans i18nKey="skills.promising" />
              </h2>
            </div>
            <div className="list">
              {personalData.skills.promising.map((skill) => {
                return <p className="skill-name">{skill}</p>;
              })}
            </div>
          </div>
          <div className="skill-group basic">
            <div className="group-header">
              <img src="/img/resume/level-1.png" alt="Level Low" />
              <h2 className="group-name">
                <Trans i18nKey="skills.basic" />
              </h2>
            </div>
            <div className="list">
              {personalData.skills.basic.map((skill) => {
                return <p className="skill-name">{skill}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintPage;
