import { useState } from "react";
import "./App.css";

//import GameEnvironment from "./components/GameEnvironment";
import Header from "./components/Header";
import Clouds from "./components/Clouds";
import GameSettings from "./components/GameSettings";
import FloatingBalloons from "./components/FloatingBalloons";
import GameBalloons from "./components/GameBalloons";

function App() {
  const [player, setPlayer] = useState("");
  const [level, setLevel] = useState("");
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);

  function playerHandler(event) {
    const playerName = event.target.value;
    setPlayer(playerName);
  }
  function levelHandler(event) {
    const level = event.target.value;
    setLevel(level);
  }
  function gameStateHandler() {
    setPlaying(!playing);
  }
  function popHandler(balloonColor) {
    if (balloonColor === "red") {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  }

  return (
    <div className="game-environment">
      <Header player={player} level={level} score={score} />
      <Clouds />
      {playing && <GameBalloons level={level} popHandler={popHandler} />}
      {!playing && (
        <GameSettings
          playerHandler={playerHandler}
          levelHandler={levelHandler}
          gameStateHandler={gameStateHandler}
        />
      )}
      {!playing && <FloatingBalloons />}
    </div>
  );
}

export default App;
