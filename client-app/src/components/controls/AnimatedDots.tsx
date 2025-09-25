import {
  DOT_COLOR,
  DOT_RADIUS,
  LINE_MAX_OPACITY,
  LINE_MIN_OPACITY,
  LINE_WIDTH,
} from "@/config/dots";
import { useEffect, useRef } from "react";

type Color = {
  r: number;
  g: number;
  b: number;
}

type CanvasDotsConfig = {
  dotColor: Color;
  lineColor: Color;
  lineWidth: number;
  radius: number;
  count: number;
  maxDistance: number; // Maximum distance between two dots to link them with line
  minOpacity: number;
  maxOpacity: number;
  fps: number;
};

const canvasDots = (
  canvas: HTMLCanvasElement,
  config: CanvasDotsConfig
): number | undefined => {
  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = "block";

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = `rgb(${config.dotColor.r}, ${config.dotColor.g}, ${config.dotColor.b})`;
  ctx.lineWidth = config.lineWidth;
  ctx.strokeStyle = `rgb(${config.dotColor.r}, ${config.dotColor.g}, ${config.dotColor.b})`;

  const dots: Dot[] = [];

  function Dot(this: Dot) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();
    this.radius = config.radius;
  }

  type Dot = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    create: () => void;
    animate: () => void;
    line: () => void;
  };

  Dot.prototype.create = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };

  Dot.prototype.animate = function () {
    for (let i = 0; i < config.count; i++) {
      const dot = dots[i];
      if (dot.y < 0 || dot.y > canvas.height) {
        dot.vx = dot.vx;
        dot.vy = -dot.vy;
      } else if (dot.x < 0 || dot.x > canvas.width) {
        dot.vx = -dot.vx;
        dot.vy = dot.vy;
      }

      dot.x += dot.vx;
      dot.y += dot.vy;
    }
  };

  Dot.prototype.line = function () {
    for (let i = 0; i < config.count; i++) {
      for (let j = 0; j < config.count; j++) {
        const i_dot = dots[i];
        const j_dot = dots[j];

        if (
          Math.abs(i_dot.x - j_dot.x) > config.maxDistance ||
          Math.abs(i_dot.y - j_dot.y) > config.maxDistance
        )
          continue;
        const dist = Math.sqrt(
          Math.pow(i_dot.x - j_dot.x, 2) + Math.pow(i_dot.y - j_dot.y, 2)
        );
        const opacity = getOpacity(
          dist,
          config.maxDistance,
          config.minOpacity,
          config.maxOpacity
        );

        ctx.beginPath();
        ctx.moveTo(i_dot.x, i_dot.y);
        ctx.lineTo(j_dot.x, j_dot.y);
        ctx.strokeStyle = `rgba(${config.lineColor.r}, ${config.lineColor.g}, ${config.lineColor.b}, ${opacity})`;
        ctx.stroke();
        ctx.closePath();
      }
    }
  };

  function createDots() {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < config.count; i++) {
      dots.push(new (Dot as any)());
      const dot = dots[i];
      dot.create();
    }

    dots[0]?.line();
    dots[0]?.animate();
  }

  return window.setInterval(createDots, 1000 / config.fps);
};

const getPointCount = (
  width: number,
  height: number,
  densityPer100px: number = 10
): number => {
  const linearSize = (width + height) / 2;
  return Math.floor((linearSize / 100) * densityPer100px);
};

const getMaxDistance = (
  width: number,
  height: number,
  linkRatio: number = 1.5
): number => {
  const pointSpacing = Math.sqrt(
    (width * height) / getPointCount(width, height)
  );
  return Math.floor(pointSpacing * linkRatio);
};

const getOpacity = (
  dist: number,
  maxDistance: number,
  min: number,
  max: number
) => {
  const ratio = 1 - Math.min(dist, maxDistance) / maxDistance;
  return min + ratio * (max - min);
};

interface AnimatedDotsProps {
  children: React.ReactNode;
}

const AnimatedDots = ({ children }: AnimatedDotsProps) => {
  const targetRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const width = targetRef.current.offsetWidth;
    const height = targetRef.current.offsetHeight;

    const dotsConfig: CanvasDotsConfig = {
      dotColor: DOT_COLOR,
      lineColor: DOT_COLOR,
      count: getPointCount(width, height),
      radius: DOT_RADIUS,
      maxDistance: getMaxDistance(width, height),
      minOpacity: LINE_MIN_OPACITY,
      maxOpacity: LINE_MAX_OPACITY,
      lineWidth: LINE_WIDTH,
      fps: 30,
    };

    const interval = canvasDots(targetRef.current, dotsConfig);

    return () => {
      interval && clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <canvas ref={targetRef} className="absolute h-full w-full -z-10" />
      {children}
    </div>
  );
};

export default AnimatedDots;