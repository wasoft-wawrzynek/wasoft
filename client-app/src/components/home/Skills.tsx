import { Trans } from "react-i18next";
import personalData from "../../resources/personalData";
import FloatingCard from "../controls/FloatingCard";
import Level1 from "@/resources/icons/level-1.svg?react";
import Level2 from "@/resources/icons/level-2.svg?react";
import Level3 from "@/resources/icons/level-3.svg?react";
import Level4 from "@/resources/icons/level-4.svg?react";

type SkillSectionKey = "key" | "solid" | "promising" | "basic";

const skillSections: { key: SkillSectionKey; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  {
    key: "key",
    icon: Level4
  },
  {
    key: "solid",
    icon: Level3
  },
  {
    key: "promising",
    icon: Level2
  },
  {
    key: "basic",
    icon: Level1
  },
];

const Skills = () => {
  return (
    <div className="relative bg-dark">
      <div className="container mx-auto py-8 flex flex-col items-center justify-center">
        <h2 className="section-title">
          <Trans i18nKey="skills.title" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          {skillSections.map(({ key, icon: Icon }) => (
            <div className="flex flex-col items-center" key={key}>
              <div className="flex flex-col items-center justify-center mb-4">
                <Icon className="h-12 w-12 fill-primary mb-2" />
                <h2 className="text-light text-[2.2rem] font-semibold">
                  <Trans i18nKey={`skills.${key}`} />
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full">
                {personalData.skills[key as SkillSectionKey].map((skill: string) => (
                  <FloatingCard
                    key={skill}
                    className="flex items-center justify-center p-2"
                    maxMove={[8, 8]}
                  >
                    <h4 className="text-base text-center">{skill}</h4>
                  </FloatingCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
