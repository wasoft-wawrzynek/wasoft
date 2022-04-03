import { FormattedMessage } from "react-intl";
import "./Title.scss";

interface ITitleProps {
  textId: string;
  lightMode?: boolean;
}

function Title(props: ITitleProps) {
  return (
    <div className={`resume-title ${props.lightMode ? "light" : ""}`}>
      <hr />
      <h3 className="text">
        <FormattedMessage id={props.textId} />{" "}
      </h3>
      <hr />
    </div>
  );
}

export default Title;
