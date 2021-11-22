import { MessageFormatElement } from "react-intl";
import en from "../lang/en.json";
import pl from "../lang/pl.json";

const translations: {
  [key: string]:
    | Record<string, string>
    | Record<string, MessageFormatElement[]>;
} = { en, pl };

export default translations;
