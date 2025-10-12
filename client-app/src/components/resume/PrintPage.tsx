import { Trans } from "react-i18next";
import { substitutes } from "../../resources/translations";
import personalData from "../../resources/personalData";
import Title from "./Title";
import {
  getDateRangeString,
  getPeriodSting,
} from "../../helpers/stringHelpers";
import i18n from "@/i18n";

interface IPageProps {
  width: number;
  height: number;
  isPdf?: boolean;
}

const PrintPage = ({ width, height, isPdf }: IPageProps) => {
  return (
    <div
      id="pdf-page"
      className="grid grid-cols-[1fr_2.5fr] grid-rows-[auto_auto_auto_1fr] mx-auto"
      style={{
        width: `${width}px`,
        height: `${Math.floor(height)}px`,
      }}
    >
      {/* Profile Section */}
      <div className="bg-medium-light p-[15%] flex items-center justify-center">
        <div className="rounded-full overflow-hidden w-full aspect-square flex items-center justify-center">
          <img src="/img/profile.png" alt="logo" className="w-full" />
        </div>
      </div>
      {/* Header Section */}
      <div className="flex bg-[#252525]">
        <div className="flex flex-col items-center m-auto">
          <h2
            className="uppercase font-bold tracking-[4px]"
            style={isPdf ? { marginBottom: "1.75rem" } : {}}
          >
            Paweł Wawrzynek
          </h2>
          <hr className="w-full h-[3px] border-none bg-primary my-2" />
          <h4 className="text-medium-light text-xl">
            .NET Developer / Team leader
          </h4>
        </div>
      </div>
      {/* About Me Section */}
      <div className="bg-medium-light p-4">
        <Title textId="resume.about-me.title" isPdf={isPdf} />
        <div className="flex items-center gap-2 my-2">
          <img className="h-6" src="/img/resume/birth.png" alt="birthday" />
          <p className="text-dark text-sm">
            {personalData.dateOfBirth.toLocaleDateString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <img className="h-6" src="/img/resume/language.png" alt="languages" />
          <div>
            {personalData.languages.map((l) => (
              <p key={l.languageId} className="text-dark text-sm">
                <Trans i18nKey={l.languageId} />
                {" - "}
                <Trans i18nKey={l.level} />
              </p>
            ))}
          </div>
        </div>
        {(
          i18n.t("resume.about-me.content", {
            returnObjects: true,
          }) as string[]
        ).map((paragraph) => (
          <p className="mb-2 text-dark text-sm" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      {/* Experience Section */}
      <div className="bg-light p-4">
        <Title textId="header.experience" isPdf={isPdf} />
        <div className="pt-4">
          {personalData.experience.map((job) => (
            <div
              key={job.company}
              className="grid grid-cols-[4.5rem_3px_1fr] gap-2"
            >
              <div>
                <p className="text-center text-dark text-sm">
                  {getDateRangeString(
                    job.roles[job.roles.length - 1]?.startDate,
                    job.roles[0].endDate
                  )}
                </p>
              </div>
              <div className="relative h-full w-full bg-dark">
                <span className="absolute left-[-6px] w-4 h-4 bg-primary border-2 border-medium-dark rounded-full z-10"></span>
              </div>
              <div className="flex flex-col px-2 mb-4">
                <h3 className="text-dark text-xl">{`/ ${job.company} /`}</h3>
                {job.roles.map((role, idx) => (
                  <div key={idx}>
                    <h3 className="text-dark text-lg">
                      {`${role.title} - ${getPeriodSting(
                        role.startDate,
                        role.endDate
                      )}`}
                    </h3>
                    <p className="text-dark text-sm">
                      <Trans
                        i18nKey={role.descriptionId}
                        components={substitutes}
                      />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-medium-light p-4">
        <Title textId="header.contact" isPdf={isPdf} />
        <div className="flex items-center gap-2 my-2">
          <img className="h-6" src="/img/resume/phone.png" alt="phone" />
          <p className="text-dark text-sm">{personalData.contact.telephone}</p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <img className="h-6" src="/img/resume/email.png" alt="email" />
          <p className="text-dark text-sm">{personalData.contact.mail}</p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <img className="h-6" src="/img/resume/website.png" alt="website" />
          <p className="text-dark text-sm">{personalData.contact.website}</p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <img
            className="h-6"
            src="/img/resume/linked-in.png"
            alt="linked-in"
          />
          <p className="text-dark text-sm">{personalData.contact.linkedIn}</p>
        </div>
      </div>
      {/* Education Section */}
      <div className="bg-light p-4">
        <Title textId="header.education" isPdf={isPdf} />
        <div className="pt-4">
          {personalData.education.map((school) => (
            <div
              key={school.titleId}
              className="grid grid-cols-[4.5rem_3px_1fr] gap-2"
            >
              <div>
                <p className="text-center text-dark text-sm">
                  {getDateRangeString(school.startDate, school.endDate)}
                </p>
              </div>
              <div className="relative h-full w-full bg-dark">
                <span className="absolute left-[-6px] w-4 h-4 bg-primary border-2 border-medium-dark rounded-full z-10"></span>
              </div>
              <div className="flex flex-col px-2 mb-4">
                <h3 className="text-dark text-xl">
                  <Trans i18nKey={school.titleId} />
                  {" - "}
                  <Trans i18nKey={school.facultyId} />
                </h3>
                <p className="text-dark text-sm">
                  <Trans i18nKey={school.schoolId} />
                  {", "}
                  <Trans i18nKey={school.locationId} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Hobbies Section */}
      <div className="bg-medium-light p-4">
        <Title textId="header.hobby" isPdf={isPdf} />
        <div className="flex flex-row gap-2 mt-2">
          {personalData.hobby.map((hobby) => (
            <div
              key={hobby.titleId}
              className="flex flex-col gap-2 items-center"
            >
              <div className="rounded-full border-2 border-dark p-2">
                <img
                  src={hobby.image}
                  alt={hobby.titleId}
                  className="w-8 h-8"
                />
              </div>
              <p className="text-dark text-sm">
                <Trans i18nKey={hobby.titleId} />
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Skills Section */}
      <div className="bg-light p-4">
        <Title textId="header.skills" isPdf={isPdf} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row items-center">
              <img
                src="/img/resume/level-4.png"
                alt="Level Top"
                className="h-8 w-8"
              />
              <h2 className="text-dark text-xl ml-2">
                <Trans i18nKey="skills.key" />
              </h2>
            </div>
            <div className="flex flex-row items-center gap-1">
              <p>
                {personalData.skills.key.map((skill, idx) => (
                  <span className="text-dark text-base" key={idx}>
                    {skill}
                    {idx !== personalData.skills.key.length - 1 && (
                      <span> | </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row items-center">
              <img
                src="/img/resume/level-3.png"
                alt="Level Medium"
                className="h-8 w-8"
              />
              <h2 className="text-dark text-xl ml-2">
                <Trans i18nKey="skills.solid" />
              </h2>
            </div>
            <div className="flex flex-row items-center gap-1">
              <p>
                {personalData.skills.solid.map((skill, idx) => (
                  <span className="text-dark text-base" key={idx}>
                    {skill}
                    {idx !== personalData.skills.solid.length - 1 && (
                      <span> | </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row items-center">
              <img
                src="/img/resume/level-2.png"
                alt="Level Low"
                className="h-8 w-8"
              />
              <h2 className="text-dark text-xl ml-2">
                <Trans i18nKey="skills.promising" />
              </h2>
            </div>
            <div className="flex flex-row items-center gap-1">
              <p>
                {personalData.skills.promising.map((skill, idx) => (
                  <span className="text-dark text-base" key={idx}>
                    {skill}
                    {idx !== personalData.skills.promising.length - 1 && (
                      <span> | </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row items-center">
              <img
                src="/img/resume/level-1.png"
                alt="Level Low"
                className="h-8 w-8"
              />
              <h2 className="text-dark text-xl ml-2">
                <Trans i18nKey="skills.basic" />
              </h2>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-1">
              <p>
                {personalData.skills.basic.map((skill, idx) => (
                  <span className="text-dark text-base" key={idx}>
                    {skill}
                    {idx !== personalData.skills.basic.length - 1 && (
                      <span> | </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPage;
