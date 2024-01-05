import React, { useRef } from "react";

import { Balloon } from "./Balloon";

const BALLOON_AMOUNT = 3;

function getRandomIndex(num) {
  return Math.round(Math.random() * (num - 1));
}

export function Balloons() {
  const redIndex = useRef(getRandomIndex(BALLOON_AMOUNT)).current;
  return (
    <div className="balloon-container">
      {Array(BALLOON_AMOUNT)
        .fill(null)
        .map((_, index) => {
          return (
            <Balloon key={index} color={index == redIndex ? "red" : "green"} />
          );
        })}
    </div>
  );
}
