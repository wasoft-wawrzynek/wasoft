const personalData = {
  aboutMeId: "about-me",
  dateOfBirth: new Date("1991-07-01"),
  contact: {
    telephone: "691-262-330",
    mail: "pawel.wawrzynek@gmail.com",
    street: "Wałowa 15/13",
    city: "Kraków",
    postCode: "30-704",
    website: "https://www.wasoft.pl",
    linkedIn: "paweł-wawrzynek-6b3433100",
  },
  languages: [
    { languageId: "lang.polish", level: "lang.native" },
    { languageId: "lang.english", level: "lang.communicative" },
  ],
  education: [
    {
      titleId: "education.masters-title",
      schoolId: "education.school",
      facultyId: "education.faculty",
      locationId: "gliwice",
      startDate: new Date("2014-01"),
      endDate: new Date("2015-09"),
      descriptionId: "education.masters-desc",
    },
    {
      titleId: "education.bachelor-title",
      schoolId: "education.school",
      facultyId: "education.faculty",
      locationId: "gliwice",
      startDate: new Date("2010/10"),
      endDate: new Date("2014-01"),
      descriptionId: "eductaion.bachelor-desc",
    },
  ],
  experience: [
    {
      company: "EQTek",
      locationId: "krakow",
      roles: [
        {
          title: ".NET Developer / Team Leader",
          startDate: new Date("2019-08"),
          endDate: undefined,
          descriptionId: "experience.eqtek.description",
          technologies: [
            "C#",
            "HTML/CSS",
            "SQL Server",
            "Entity Framework",
            "nUnit",
            "Git",
            "TFS2018",
            "JIRA",
            "SCRUM",
          ],
        },
      ],
    },
    {
      company: "VSoft S.A.",
      locationId: "krakow",
      roles: [
        {
          title: "Software Developer Technical Lead",
          startDate: new Date("2019-03"),
          endDate: new Date("2019-07"),
          descriptionId: "experience.vsoft.description",
          technologies: [
            "C#",
            "Razor",
            "HTML/CSS",
            "SQL Server",
            "Git",
            "TFS",
            "SCRUM",
          ],
        },
      ],
    },
    {
      company: "FlightScope",
      locationId: "gliwice",
      roles: [
        {
          title: "Software Development Project Manager",
          startDate: new Date("2017-08"),
          endDate: new Date("2019-02"),
          descriptionId: "experience.flightscope.pm-description",
          technologies: [],
        },
        {
          title: "Senior C# Developer (team leader)",
          startDate: new Date("2015-07"),
          endDate: new Date("2019-02"),
          descriptionId: "experience.flightscope.leader-description",
          technologies: [
            "C#",
            "C++",
            "DirectX",
            "WPF",
            "SQLite",
            "SVN",
            "JIRA",
          ],
        },
        {
          title: "C# Developer",
          startDate: new Date("2013-05"),
          endDate: new Date("2015-06"),
          descriptionId: "experience.flightscope.dev-description",
          technologies: ["C#", "WPF", "Windows Strore Apps", "SVN"],
        },
      ],
    },
  ],
  hobby: [
    {
      titleId: "hobby.brewing-title",
      descriptionId: "hobby.brewing-description",
      imgSrc: "/img/wawrzelnia.svg",
    },
    {
      titleId: "hobby.squash-title",
      descriptionId: "hobby.squash-description",
      imgSrc: "/img/squash.svg",
    },
    {
      titleId: "hobby.traveling-title",
      descriptionId: "hobby.traveling-description",
      imgSrc: "/img/world.svg",
    },
  ],
};

export default personalData;
