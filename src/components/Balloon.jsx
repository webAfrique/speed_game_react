import React, { useState } from "react";

function generateBalloonStyles(balloonColor) {
  let r, g, b;
  if (balloonColor === "red") {
    r = 255;
    g = 0;
    b = 0;
  } else if (balloonColor === "green") {
    r = 173;
    g = 255;
    b = 47;
  }

  return {
    backgroundColor: `rgba(${r},${g},${b},0.7)`,
    color: `rgba(${r},${g},${b},0.7)`,
    boxShadow: `inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7)`,
  };
}

export function Balloon({ color }) {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className="balloon"
      style={{
        ...generateBalloonStyles(color),
        visibility: hidden ? "hidden" : undefined,
      }}
      onClick={() => {
        setHidden(true);
      }}
    ></div>
  );
}
