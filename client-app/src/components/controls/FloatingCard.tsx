import { CSSProperties, ReactNode, useEffect, useState } from "react";
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
  const [translation, setTranslation] = useState([0, 0]);

  const boxStyle: CSSProperties = {
    padding: `${maxMove[1]}px ${maxMove[0]}px`,
  };
  const cardStyle: CSSProperties = {
    transform: `translate(${translation[0]}px, ${translation[1]}px)`,
    transition: `transform ${intervalMs / 1000}s`,
    transitionTimingFunction: "linear",
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTranslation(getNewPosition(maxMove));
    }, intervalMs);
    return () => clearInterval(intervalId);
  }, [intervalMs, maxMove]);

  return (
    <div
      className={`${className ? className : ""} floating-card-box`}
      style={boxStyle}
    >
      <div className="floating-card" style={cardStyle}>
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
