import { MessageFormatElement } from "react-intl";
import en from "./en.json";
import pl from "./pl.json";

export const messages: {
  [key: string]:
    | Record<string, string>
    | Record<string, MessageFormatElement[]>;
} = { en, pl };

export const values = {
  br: <br />,
  wawrzelniaLink: <a href="https://www.wawrzelnia.pl">Wawrzelnia.pl</a>
};

export default messages;
