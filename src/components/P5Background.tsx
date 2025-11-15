// src/components/P5Background.tsx
import { useEffect, useRef } from "react";
import p5 from "p5";

const P5Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      // ここで背景アニメーションを定義
      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight).parent(containerRef.current!);
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };

      p.draw = () => {
        // 好きな背景に変えてOK
        p.background(255); // 濃い紺色

        p.noStroke();
        const t = p.millis() * 0.001;

        // シンプルな動く円のパターン例
        for (let i = 0; i < 40; i++) {
          const angle = (i / 40) * p.TWO_PI + t * 0.3;
          const radius = 100 + 40 * p.sin(t + i);
          const x = p.width / 2 + radius * p.cos(angle);
          const y = p.height / 2 + radius * p.sin(angle);

          const alpha = 80 + 40 * p.sin(t * 2 + i);
          p.fill(80, 190, 255, alpha); // 青系の光る点
          p.circle(x, y, 10);
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
