import { useRef } from "react";

import { Balloon } from "./Balloon";

//const BALLOON_AMOUNT = 5;

function getRandomIndex(num) {
  return Math.round(Math.random() * (num - 1));
}

export function Balloons({ quantity, popHandler }) {
  const redIndex = useRef(getRandomIndex(quantity)).current;
  return (
    <div className="balloon-container">
      {Array(quantity)
        .fill(null)
        .map((_, index) => {
          return (
            <Balloon
              key={index}
              color={index == redIndex ? "red" : "green"}
              popHandler={popHandler}
            />
          );
        })}
    </div>
  );
}
