// src/components/P5Background.tsx
import { useEffect, useRef } from "react";
import p5 from "p5";

const P5Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let userX = p.windowWidth / 2;
      let userY = p.windowHeight / 2;
      
      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight).parent(containerRef.current!);
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };

      p.draw = () => {
        userX = userX + Math.trunc((p.mouseX - userX) / 10);
        userY = userY + Math.trunc((p.mouseY - userY) / 10);

        for (let wi = 0; wi < window.innerWidth; wi+=10) {
            for (let hi = 0; hi < window.innerHeight; hi+=10) {
                p.stroke(200);
                if (p.abs(wi-userX)<30 || p.abs(hi-userY)<30 ){
                    p.stroke(0);
                }
                p.point(wi, hi);
            }
        }
      };
    };

    const instance = new p5(sketch);

    // アンマウント時に破棄
    return () => {
      instance.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0, // top:0 right:0 bottom:0 left:0
        zIndex: -1,           // 背景に回す
        pointerEvents: "none" // クリックを透過
      }}
    />
  );
};

export default P5Background;
