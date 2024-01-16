import { useState, useEffect, useRef } from "react";
import { Balloon } from "./Balloon";
import { Balloons } from "./Balloons";

/* function createBalloons(num) {
  const max = num - 1;
  const min = 0;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  let balloonsArray = [];

  for (let index = 0; index < num; index++) {
    if (index === rand) {
      balloonsArray.push("red");
    } else {
      balloonsArray.push("green");
    }
  }
} */
/* function generateBalloons(num) {
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
}*/
const balloonQuantity = {
  Easy: 3,
  Medium: 5,
  Difficult: 7,
};

function GameBalloons({ level, popHandler }) {
  const quantity = balloonQuantity[level];
  const delay = useRef(2000);
  const [round, setRound] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (delay.current > 100) {
        delay.current = delay.current - 50;
      }
      setRound(round + 1);
    }, delay.current);
  }, [round]);

  return (
    <>
      {" "}
      <Balloons key={round} quantity={quantity} popHandler={popHandler} />{" "}
      delay: {delay.current}{" "}
    </>
  );
}

export default GameBalloons;
