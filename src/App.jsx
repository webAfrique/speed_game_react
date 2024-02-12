import { useState } from "react";
import "./App.css";

//import GameEnvironment from "./components/GameEnvironment";
import Header from "./components/Header";
import Clouds from "./components/Clouds";
import GameSettings from "./components/GameSettings";
import FloatingBalloons from "./components/FloatingBalloons";
import GameBalloons from "./components/GameBalloons";
import ScoreCard from "./components/ScoreCard";
import GameOver from "./components/GameOver";

import gameSound from "./assets/audio/World-Map1.mp3";
import popSound from "./assets/audio/balloon-pop-48030.mp3";
import failSound from "./assets/audio/ooh-123103.mp3";
import applauseSound from "./assets/audio/small-applause-6695.mp3";
import sadSound from "./assets/audio/wah-wah-sad-trombone-6347.mp3";

const gameTrack = new Audio(gameSound);
const pop = new Audio(popSound);
const ooh = new Audio(failSound);
const applause = new Audio(applauseSound);
const sad = new Audio(sadSound);

function App() {
  const [player, setPlayer] = useState("");
  const [level, setLevel] = useState("Easy");
  const [gameState, setGameState] = useState("init");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  //const [endOfRound, setEndOfRound] = useState(false);
  //const [gameOver, setGameOver] = useState(false);

  function startGame() {
    gameTrack.play();
    setGameState("playing");
    //setEndOfRound(false);
  }
  function popHandler(balloonColor) {
    // if the right balloon is popped
    if (balloonColor === "red") {
      setScore(score + 1);
      pop.play();
    } else if (round == 3) {
      // if wrong balloon and last round
      setGameState("gameOver");
      gameTrack.pause();
      score >= 10 ? applause.play() : sad.play();
    } else {
      // wrong balloon but not last round
      setScore(score == 0 ? 0 : score - 1);
      setGameState("endOfRound");
      setRound(round + 1);
      gameTrack.pause();
      ooh.play();
    }
  }

  return (
    <div className="game-environment">
      <Header player={player} level={level} score={score} />
      <Clouds />
      {gameState === "init" && <FloatingBalloons />}
      {gameState === "init" && (
        <GameSettings
          player={player}
          setPlayer={setPlayer}
          setLevel={setLevel}
          startGame={startGame}
        />
      )}
      {gameState === "playing" && (
        <GameBalloons level={level} popHandler={popHandler} />
      )}
      {gameState === "endOfRound" && (
        <ScoreCard score={score} startGame={startGame} />
      )}
      {gameState === "gameOver" && (
        <GameOver score={score} player={player} setGameState={setGameState} />
      )}
    </div>
  );
}

export default App;
