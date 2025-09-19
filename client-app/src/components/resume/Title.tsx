import { Trans } from "react-i18next";

interface ITitleProps {
  textId: string;
  isPdf?: boolean;
}

const Title = ({ textId, isPdf }: ITitleProps) => {
  return (
    <div className={`w-full flex items-center gap-2 ${isPdf ? "mt-2" : ""}`}>
      <hr className="bg-dark border-none h-[3px] flex-1" />
      <h3 className="text-dark uppercase text-[1.75rem]" style={isPdf ? { marginTop: "-1.75rem", marginLeft: "0.5rem" } : {}}>
        <Trans i18nKey={textId} />
      </h3>
      <hr className="bg-dark border-none h-[3px] flex-1" />
    </div >
  );
};

export default Title;
