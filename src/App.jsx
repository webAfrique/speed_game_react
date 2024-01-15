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

  return (
    <div className="game-environment">
      <Header player={player} level={level} />
      <Clouds />
      {playing && <GameBalloons level={level} />}
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
