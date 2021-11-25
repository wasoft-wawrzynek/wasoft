const personalData = {
  education: [
    {
      title: "Masters Degree",
      school: "Silesian University of Technology",
      faculty: "Automatic Control and Robotics, Computer Control Systems",
      location: "Gliwice, Poland",
      startDate: new Date("2014-01"),
      endDate: new Date("2015-09"),
      description:
        'A diploma thesis on the subject "System for decoding Morse code with the use of software-defined radio" realized in the form of an application that performs real-time digital audio signal processing, written in C ++.',
    },
    {
      title: "Bachelor's Degree",
      school: "Silesian University of Technology",
      faculty: "Automatic Control and Robotics",
      location: "Gliwice, Poland",
      startDate: new Date("2010/10"),
      endDate: new Date("2014-01"),
      description: "",
    },
  ],
  experience: [
    {
      company: "EQTek",
      roles: [
        {
          title: ".NET Developer / Team Leader",
          startDate: new Date("2019-08"),
          endDate: undefined,
          location: "Kraków, Poland",
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
      roles: [
        {
          title: "Software Developer Technical Lead",
          startDate: new Date("2019-03"),
          endDate: new Date("2019-07"),
          location: "Kraków, Poland",
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
      roles: [
        {
          title: "Software Development Project Manager",
          startDate: new Date("2017-08"),
          endDate: new Date("2019-02"),
          location: "Gliwice, Poland",
          descriptionId: "experience.flightscope.pm-description",
          technologies: [],
        },
        {
          title: "Senior C# Developer (team leader)",
          startDate: new Date("2015-07"),
          endDate: new Date("2019-02"),
          location: "Gliwice, Poland",
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
          location: "Gliwice, Poland",
          descriptionId: "experience.flightscope.dev-description",
          technologies: ["C#", "WPF", "Windows Strore Apps", "SVN"],
        },
      ],
    },
  ],
};

export default personalData;
