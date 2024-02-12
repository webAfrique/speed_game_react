function ScoreCard({ score, startGame }) {
  return (
    <div className="score-card">
      <h2>
        <span className="material-symbols-outlined skull">skull</span>
      </h2>
      <p>Oops! Wrong balloon</p>
      <button onClick={startGame}>Resume</button>
    </div>
  );
}

export default ScoreCard;
