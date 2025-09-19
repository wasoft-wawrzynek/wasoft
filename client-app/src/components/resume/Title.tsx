import { Trans } from "react-i18next";

interface ITitleProps {
  textId: string;
}

const Title = (props: ITitleProps) => {
  return (
    <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2">
      <hr className="bg-dark border-none h-[3px]" />
      <h3 className="text-dark uppercase text-[1.75rem]">
        <Trans i18nKey={props.textId} />
      </h3>
      <hr className="bg-dark border-none h-[3px]" />
    </div>
  );
};

export default Title;
