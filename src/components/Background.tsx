"use client";

import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";

    script.innerHTML = `
      import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

      const canvas = document.getElementById("canvas");

      if (canvas) {
        const app = TubesCursor(canvas, {
          tubes: {
            colors: ["#00F5FF", "#0096FF", "#001F3F"],
            lights: {
              intensity: 80,
              colors: ["#00F5FF", "#00BFFF", "#0096FF", "#0033CC"],
            }
          }
        });

        document.body.addEventListener("click", () => {
          const randomColors = (count) =>
            new Array(count)
              .fill(0)
              .map(() =>
                "#" +
                Math.floor(Math.random() * 16777215)
                  .toString(16)
                  .padStart(6, "0")
              );

          app.tubes.setColors(randomColors(3));
          app.tubes.setLightsColors(randomColors(4));
        });
      }
    `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <canvas
      id="canvas"
      className="fixed inset-0 -z-20"
    />
  );
}