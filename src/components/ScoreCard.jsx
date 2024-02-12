function ScoreCard({ score, startGame }) {
  return (
    <div className="score-card">
      <span className="material-symbols-outlined skull">skull</span>
      <h2>Oops!</h2>
      <p>your score is {score}</p>
      <button onClick={startGame}>Resume</button>
    </div>
  );
}

export default ScoreCard;
