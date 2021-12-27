import { MessageFormatElement } from "react-intl";
import en from "./resources/lang/en.json";
import pl from "./resources/lang/pl.json";

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
