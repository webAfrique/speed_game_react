import { useState, useEffect, useRef } from "react";
import { Balloons } from "./Balloons";

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
      <p>Click the red balloon to pop it.</p>
    </>
  );
}

export default GameBalloons;
