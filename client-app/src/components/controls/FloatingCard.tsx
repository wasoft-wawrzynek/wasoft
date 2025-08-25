import { ReactNode } from "react";
import "./FloatingCard.scss";

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
  /* TODO: Introduce floating the box with the same tool as po-ptokach, instead of the CSS styles */
  return (
    <div
      className={`${className ? className : ""} floating-card-box`}
    >
      <div className="floating-card">
        {children}
        <div className="corner lt"></div>
        <div className="corner rt"></div>
        <div className="corner lb"></div>
        <div className="corner rb"></div>
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
