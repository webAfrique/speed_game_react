import { useState } from "react";

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

function popBalloon(event) {
  event.target.style.visibility = "hidden";
}

function generateBalloons(num) {
  const max = num - 1;
  const min = 0;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  let balloonsArray = [];

  for (let index = 0; index < num; index++) {
    if (index === rand) {
      balloonsArray.push(
        <div
          key={index}
          className="balloon"
          style={generateBalloonStyles("red")}
          onClick={popBalloon}
        ></div>
      );
    } else {
      balloonsArray.push(
        <div
          key={index}
          className="balloon"
          style={generateBalloonStyles("green")}
          onClick={popBalloon}
        ></div>
      );
    }
  }
  return balloonsArray;
}

function GameBalloons() {
  const [balloons, setBalloons] = useState(generateBalloons(3));

  return (
    <div className="balloon-container">
      {balloons.map((balloon) => balloon)}
    </div>
  );
}

export default GameBalloons;
