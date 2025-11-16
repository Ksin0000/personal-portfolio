// src/components/P5Background.tsx
import { useEffect, useRef } from "react";
import p5 from "p5";

const P5Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      type Blob = {
        basePos: p5.Vector;
        radius: number;
        driftSpeed: number;
      };

      let blobs: Blob[] = [];

      const initBlobs = (width: number, height: number) => {
        const count : number = (p.windowWidth*p.windowHeight)/10000;
        blobs = Array.from({ length: count }, () => ({
          basePos: p.createVector(p.random(width), p.random(height)),
          radius: p.random(60, 160),
          driftSpeed: p.random(0.0005, 0.0015),
        }));
      };

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight).parent(containerRef.current!);
        p.noStroke();
        initBlobs(p.width, p.height);
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        initBlobs(p.width, p.height);
      };

      p.draw = () => {
        p.background(260);

        blobs.forEach((blob, index) => {
          const t = p.frameCount * blob.driftSpeed + index;
          const x = blob.basePos.x + Math.sin(t) * 80;
          const y = blob.basePos.y + Math.cos(t * 0.8) * 60;
          const pulsate = 0.8 + Math.sin(t * 1.5) * 0.2;

          p.fill(0, 20);
          p.circle(x, y, blob.radius * pulsate);
        });
      };
    };

    const instance = new p5(sketch);

    return () => {
      instance.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none"
      }}
    />
  );
};

export default P5Background;
