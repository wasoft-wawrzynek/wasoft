const personalData = {
  education: [
    {
      title: "Masters Degree",
      school: "Silesian University of Technology",
      faculty: "Automatic Control and Robotics, Computer Control Systems",
      location: "Gliwice, Poland",
      startDate: "01/2014",
      endDate: "09/2015",
      description:
        'A diploma thesis on the subject "System for decoding Morse code with the use of software-defined radio" realized in the form of an application that performs real-time digital audio signal processing, written in C ++.',
    },
    {
      title: "Bachelor's Degree",
      school: "Silesian University of Technology",
      faculty: "Automatic Control and Robotics",
      location: "Gliwice, Poland",
      startDate: "10/2010",
      endDate: "01/2014",
      description: "",
    },
  ],
  experience: [
    {
      company: "EQTek",
      startDate: "08/2019",
      endDate: null,
      roles: [
        {
          title: ".NET Developer / Team Leader",
          startDate: "08/2019",
          endDate: null,
          location: "Kraków, Poland",
          descriptionId: "experience.eqtek.description",
          technologies: [
            ".NET",
            "C#",
            "HTML/CSS",
            "MS SQL Server",
            "Git",
            "TFS",
            "nUnit",
            "JIRA",
          ],
        },
      ],
    },
    {
      company: "VSoft S.A.",
      startDate: "03/2019",
      endDate: "07/2019",
      roles: [
        {
          title: "Software Developer Technical Lead",
          startDate: "03/2019",
          endDate: "07/2019",
          location: "Kraków, Poland",
          descriptionId: "experience.vsoft.description",
          technologies: [
            "C#",
            "Razor",
            "HTML/CSS",
            "MS SQL Server",
            "Git",
            "TFS",
          ],
        },
      ],
    },
    {
      company: "FlightScope",
      startDate: "02/2014",
      endDate: "02/2019",
      roles: [
        {
          title: "Software Development Project Manager",
          startDate: "08/2017",
          endDate: "02/2019",
          location: "Gliwice, Poland",
          descriptionId: "experience.flightscope.pm-description",
          technologies: [],
        },
        {
          title: "Senior C# Developer (team leader)",
          startDate: "07/2015",
          endDate: "02/2019",
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
          startDate: "06/2015",
          endDate: "02/2014",
          location: "Gliwice, Poland",
          descriptionId: "experience.flightscope.dev-description",
          technologies: ["C#", "WPF", "Windows Strore Apps", "SVN"],
        },
      ],
    },
  ],
};

export default personalData;
