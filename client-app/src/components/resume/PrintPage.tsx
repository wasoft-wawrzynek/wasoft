import "./PrintPage.scss";
import { FormattedMessage, useIntl } from "react-intl";
import { values } from "../../lang/translations";
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

function PrintPage(props: IPageProps) {
  const intl = useIntl();

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
          <h4>.NET Developer</h4>
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
                  <FormattedMessage id={l.languageId} />
                  {" - "}
                  <FormattedMessage id={l.level} />
                </p>
              );
            })}
          </div>
        </div>
        {personalData.aboutMeId.map((paragraph) => {
          return (
            <p key={paragraph}>
              <FormattedMessage id={paragraph} />
            </p>
          );
        })}
      </div>
      <div className="resume-section experience">
        <Title textId="header.experience" />
        <div className="timeline">
          {personalData.experience.map((job) => {
            return (
              <div key={job.company} className="job-item">
                <div className="dates">
                  <p>
                    {getDateRangeString(
                      intl,
                      job.roles.at(-1)?.startDate,
                      job.roles[0].endDate
                    )}
                  </p>
                </div>
                <div className="line"></div>
                <div className="desc">
                  <h3 className="company-name">{`/ ${job.company} /`}</h3>
                  {job.roles.map((role) => {
                    return (
                      <>
                        <h3 className="role-name">{`${
                          role.title
                        } - ${getPeriodSting(
                          intl,
                          role.startDate,
                          role.endDate
                        )}`}</h3>
                        <p>
                          <FormattedMessage
                            id={role.descriptionId}
                            values={values}
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
            src="/img/resume/linkedIn.png"
            alt="linked-in"
          />
          <p>{personalData.contact.linkedIn}</p>
        </div>
      </div>
      <div className="resume-section education">
        <Title textId="header.education" />
      </div>
      <div className="resume-section soft-skills"></div>
      <div className="resume-section tech-skills"></div>
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
                  <FormattedMessage id={hobby.titleId} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PrintPage;
