import { useNavigate } from "react-router";

function GameOver({ score, player }) {
  const navigate = useNavigate();
  return (
    <div className="score-card">
      <h2>Game Over</h2>
      {score >= 10 ? (
        <p>
          Well done {player}, you popped {score} balloons.
        </p>
      ) : (
        <p>
          Try harder {player}, you only popped {score} balloons.
        </p>
      )}
      <button onClick={() => navigate(0)}>New game</button>
    </div>
  );
}

export default GameOver;
