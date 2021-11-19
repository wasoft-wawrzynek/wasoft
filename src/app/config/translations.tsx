import { MessageFormatElement } from "react-intl";
import en from "./en.json";
import pl from "./pl.json";

const translations: {
  [key: string]:
    | Record<string, string>
    | Record<string, MessageFormatElement[]>;
} = { en, pl };

export default translations;
