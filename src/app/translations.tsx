import { MessageFormatElement } from "react-intl";
import en from "./config/en.json";
import pl from "./config/pl.json";

const translations: {
  [key: string]:
    | Record<string, string>
    | Record<string, MessageFormatElement[]>;
} = { en, pl };

export default translations;
