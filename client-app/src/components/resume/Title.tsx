import "./Title.scss";
import { Trans } from "react-i18next";

interface ITitleProps {
  textId: string;
  lightMode?: boolean;
}

const Title = (props: ITitleProps) => {
  return (
    <div className={`resume-title ${props.lightMode ? "light" : ""}`}>
      <hr />
      <h3 className="text">
        <Trans i18nKey={props.textId} />{" "}
      </h3>
      <hr />
    </div>
  );
}

export default Title;
