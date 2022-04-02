import { FormattedMessage } from "react-intl";
import "./Title.scss";

interface ITitleProps {
  textId: string;
}

function Title(props: ITitleProps) {
  return (
    <div className="section-title">
      <hr />
      <h3 className="text">
        <FormattedMessage id={props.textId} />{" "}
      </h3>
      <hr />
    </div>
  );
}

export default Title;
