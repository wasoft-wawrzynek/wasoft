import { ReactNode, useEffect, useState } from "react";

const getNewPosition = (maxMove: [number, number]): [number, number] => {
  const newX = Math.floor(Math.random() * 2 * maxMove[0] - maxMove[0]);
  const newY = Math.floor(Math.random() * 2 * maxMove[1] - maxMove[1]);
  return [newX, newY];
};

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  maxMove?: [number, number];
}

const FloatingCard = ({
  children,
  className = "",
  maxMove = [20, 20],
}: FloatingCardProps) => {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const animate = () => {
      setPosition(getNewPosition(maxMove));
    };
    const interval = setInterval(animate, 2000);
    animate();
    return () => clearInterval(interval);
  }, [2000, maxMove]);

  return (
    <div className={className} style={{ position: "relative" }}>
      <div className="w-full h-full" style={{ padding: `${maxMove[1]}px ${maxMove[0]}px`, }}>
        <div
          className={`relative border-2 border-primary/50 p-4 w-full transition-transform duration-2500 ease-in`}
          style={{ transform: `translate(${position[0]}px, ${position[1]}px)` }}
        >
          {children}
          <div className="bg-primary h-[6px] w-[6px] rounded-[30%] absolute top-[-3px] left-[-3px]" />
          <div className="bg-primary h-[6px] w-[6px] rounded-[30%] absolute top-[-3px] right-[-3px]" />
          <div className="bg-primary h-[6px] w-[6px] rounded-[30%] absolute bottom-[-3px] left-[-3px]" />
          <div className="bg-primary h-[6px] w-[6px] rounded-[30%] absolute bottom-[-3px] right-[-3px]" />
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
