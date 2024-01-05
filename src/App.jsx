import { useState, useEffect } from "react";
import "./App.css";

//import GameEnvironment from "./components/GameEnvironment";
import Header from "./components/Header";
import Clouds from "./components/Clouds";
import GameBalloons from "./components/GameBalloons";
//import FloatingBalloons from "./components/FloatingBalloons";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="game-environment">
      <Header />
      <Clouds />
      <GameBalloons />
    </div>
  );
}

export default App;
