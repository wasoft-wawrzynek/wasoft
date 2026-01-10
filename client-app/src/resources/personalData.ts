import TravelIcon from "./icons/travel.svg?react";
import SquashIcon from "./icons/squash.svg?react";
import BreweryIcon from "./icons/brewery.svg?react";
import DrumKitIcon from "./icons/drum-kit.svg?react";

const personalData = {
  dateOfBirth: new Date("1991-07-01"),
  contact: {
    telephone: "(+48) 691-262-330",
    mail: "pawel.wawrzynek@gmail.com",
    website: "https://www.wasoft.pl",
    linkedIn: "pawel-wawrzynek",
    gitHub: "wasoft-wawrzynek",
  },
  languages: [
    { languageId: "resume.lang-polish", level: "resume.lang-native" },
    { languageId: "resume.lang-english", level: "resume.lang-communicative" },
  ],
  education: [
    {
      titleId: "education.masters.title",
      schoolId: "education.school",
      facultyId: "education.faculty",
      locationId: "gliwice",
      startDate: new Date("2014-01"),
      endDate: new Date("2015-09"),
      descriptionId: "education.masters.desc",
    },
    {
      titleId: "education.bachelor.title",
      schoolId: "education.school",
      facultyId: "education.faculty",
      locationId: "gliwice",
      startDate: new Date("2010/10"),
      endDate: new Date("2014-01"),
      descriptionId: "education.bachelor.desc",
    },
  ],
  experience: [
    {
      company: "Endava",
      locationId: "krakow",
      roles: [
        {
          title: "Dev Lead",
          startDate: new Date("2024-10"),
          endDate: undefined,
          descriptionId: "experience.endava.description",
          technologies: [
            "C#/.NET 9",
            "ASP.NET Core",
            "Azure (App Service, AD B2C, DevOps)",
            "YAML (Azure pipelines)",
            "SignalR",
            "React 18 + TypeScript",
            "SQL Server",
            "nUnit",
            "NewRelic",
          ]
        }
      ]
    },
    {
      company: "EQ",
      locationId: "krakow",
      roles: [
        {
          title: ".NET Developer / Team Leader",
          startDate: new Date("2019-08"),
          endDate: new Date("2024-09"),
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
      company: "VSoft",
      locationId: "krakow",
      roles: [
        {
          title: "Technical Lead",
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
          technologies: [],
        },
      ],
    },
  ],
  skills: {
    key: ["C#/.NET", "HTML/CSS", "Azure", "YAML (pipelines)"],
    solid: ["React", "TypeScript", "SQL", "xUnit", "SignalR", "microservices"],
    promising: ["Docker", "PowerShell", "Git"],
    basic: ["GCP", "Java", "C++"],
  },
  portfolio: [
    {
      nameId: "portfolio.wasoft.name",
      subtitleId: "portfolio.wasoft.subtitle",
      descriptionId: "portfolio.wasoft.description",
      startDate: new Date("2021-11"),
      endDate: undefined,
      technologies: [
        "React 18",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "i18next",
        "C#/.NET 8",
        "Azure Functions",
        "Azure Static Web Apps",
        "SendGrid",
        "GitHub Actions"
      ],
      screenshots: ["/img/portfolio/wasoft-1.png", "/img/portfolio/wasoft-2.png", "/img/portfolio/wasoft-3.png", "/img/portfolio/wasoft-4.png"],
      repositoryUrl: "https://github.com/wasoft-wawrzynek/wasoft",
      productionUrl: "https://wasoft.pl",
    },
    {
      nameId: "portfolio.poptokach.name",
      subtitleId: "portfolio.poptokach.subtitle",
      descriptionId: "portfolio.poptokach.description",
      startDate: new Date("2025-03"),
      endDate: new Date("2025-09"),
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "TailwindCSS 4",
        "i18next",
        "Motion (Framer Motion)",
        "Radix UI",
        "shadcn/ui",
        "Lucide React",
        "Azure Static Web Apps"
      ],
      screenshots: ["/img/portfolio/poptokach-1.png", "/img/portfolio/poptokach-2.png", "/img/portfolio/poptokach-3.png", "/img/portfolio/poptokach-4.png", "/img/portfolio/poptokach-5.png"],
      repositoryUrl: "https://github.com/wasoft-wawrzynek/po-ptokach",
      productionUrl: "https://po-ptokach-info",
    }, {
      nameId: "portfolio.wawrzelnia.name",
      subtitleId: "portfolio.wawrzelnia.subtitle",
      descriptionId: "portfolio.wawrzelnia.description",
      startDate: new Date("2020-05"),
      endDate: new Date("2021-10"),
      technologies: [
        "React 17",
        "TypeScript",
        "MobX",
        "SCSS",
        "React Router",
        "Semantic UI",
        "Axios",
        "C#/.NET 5",
        "Entity Framework Core",
        "SQL Server",
        "AutoMapper",
        "MailKit",
        "Swagger/Swashbuckle",
        "Serilog",
        "GitHub Actions"
      ],
      screenshots: ["/img/portfolio/wawrzelnia-1.png", "/img/portfolio/wawrzelnia-2.png", "/img/portfolio/wawrzelnia-3.png", "/img/portfolio/wawrzelnia-4.png", "/img/portfolio/wawrzelnia-5.png", "/img/portfolio/wawrzelnia-6.png"],
      repositoryUrl: "https://github.com/wasoft-wawrzynek/wawrzelnia"
    }
  ],
  hobby: [
    {
      titleId: "hobby.traveling-title",
      descriptionId: "hobby.traveling-description",
      icon: TravelIcon,
      image: "/img/resume/travel.png",
    },
    {
      titleId: "hobby.drumming-title",
      descriptionId: "hobby.drumming-description",
      icon: DrumKitIcon,
      image: "/img/resume/drum-kit.png",
    },
    {
      titleId: "hobby.squash-title",
      descriptionId: "hobby.squash-description",
      icon: SquashIcon,
      image: "/img/resume/squash.png",
    },
    {
      titleId: "hobby.brewing-title",
      descriptionId: "hobby.brewing-description",
      icon: BreweryIcon,
      image: "/img/resume/brewery.png",
    },
  ],
};

export default personalData;
