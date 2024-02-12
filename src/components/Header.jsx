function Header({ level, score }) {
  return (
    <header>
      <div className="game-info">
        <h4>Score: {score}</h4>
        <h1>Balloon Popper Game</h1>
        <h4>Level: {level}</h4>
      </div>
    </header>
  );
}

export default Header;
