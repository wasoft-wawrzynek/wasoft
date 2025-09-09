import { ReactNode } from "react";

const getNewPosition = (maxMove: number[]) => {
  var newX = Math.floor(Math.random() * 2 * maxMove[0] - maxMove[0]);
  var newY = Math.floor(Math.random() * 2 * maxMove[1] - maxMove[1]);
  return [newX, newY];
};

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  intervalMs: number;
  maxMove: number[];
}

const FloatingCard = ({
  children,
  className,
  intervalMs,
  maxMove,
}: FloatingCardProps) => {
  // TODO: Introduce floating the box with the same tool as po-ptokach, instead of the CSS styles
  return (
    <div className={className ? className : ""}>
      <div className="relative border-2 border-primary/30 p-4 w-full">
        {children}
        <div className="bg-primary h-[6px] w-[6px] rounded-[30%] absolute top-[-3px] left-[-3px]" />
        <div className="bg-primary h-[6px] w-[6px] rounded-[30%] absolute top-[-3px] right-[-3px]" />
        <div className="bg-primary h-[6px] w-[6px] rounded-[30%] absolute bottom-[-3px] left-[-3px]" />
        <div className="bg-primary h-[6px] w-[6px] rounded-[30%] absolute bottom-[-3px] right-[-3px]" />
      </div>
    </div>
  );
};

FloatingCard.defaultProps = {
  className: "",
  intervalMs: 2000,
  maxMove: [20, 20],
};

export default FloatingCard;
