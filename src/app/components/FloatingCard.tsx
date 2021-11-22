import React, { CSSProperties, useEffect, useState } from "react";
import "./FloatingCard.scss";

const getNewPosition = (maxMove: number[]) => {
  var newX = Math.floor(Math.random() * 2 * maxMove[0] - maxMove[0]);
  var newY = Math.floor(Math.random() * 2 * maxMove[1] - maxMove[1]);
  return [newX, newY];
};

const FloatingCard: React.FC<{ intervalMs: number; maxMove: number[] }> = ({
  children,
  intervalMs,
  maxMove,
}) => {
  const [translation, setTranslation] = useState([0, 0]);
  const styleObj: CSSProperties = {
    margin: `${maxMove[0] * 1.5}px ${maxMove[1] * 1.5}px`,
    transform: `translate(${translation[0]}px, ${translation[1]}px)`,
    transition: `transform ${intervalMs / 1000}s`,
    transitionTimingFunction: "linear",
  };

  useEffect(() => {
    setTimeout(() => {
      setTranslation(getNewPosition(maxMove));
    }, intervalMs);
    return () => {};
  });

  return (
    <div className="floating-card" style={styleObj}>
      {children}
      <div className="corner lt"></div>
      <div className="corner rt"></div>
      <div className="corner lb"></div>
      <div className="corner rb"></div>
    </div>
  );
};

export default FloatingCard;
