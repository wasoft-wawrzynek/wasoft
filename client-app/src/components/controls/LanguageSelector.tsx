import { useTranslation } from "react-i18next";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

const languages = ["pl-pl", "pl-sp", "en"];

const getFlagSrc = (language: string): string => `./locales/${language}.svg`;

interface ILanguageSelectorProps {
  inline?: boolean
};

const LanguageSelector = ({ }: ILanguageSelectorProps) => {
  const { i18n } = useTranslation();

  const getCurrentLang = () => {
    if (i18n.language.startsWith("en")) return "en";
    if (i18n.language.toLowerCase() == "pl-sp") return "pl-sp";
    return "pl-pl";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-10 h-10">
          <AvatarImage src={getFlagSrc(getCurrentLang())} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" className="flex flex-row gap-2 p-2">
        {languages
          .filter((lang) => lang != getCurrentLang())
          .map((lang) => {
            return (
              <DropdownMenuItem
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
              >
                <Avatar className="w-10 h-10">
                  <AvatarImage src={getFlagSrc(lang)} alt={lang} />
                </Avatar>
              </DropdownMenuItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
