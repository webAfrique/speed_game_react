import { useNavigate } from "react-router";
function GameOver({ score }) {
  const navigate = useNavigate();
  return (
    <div className="score-card">
      <h2>Game Over</h2>
      <p>your score is {score}</p>
      <button onClick={() => navigate(0)}>New game</button>
    </div>
  );
}

export default GameOver;
