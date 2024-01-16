function Header({ player, level, score }) {
  return (
    <header>
      <h1>Balloon Popper Speed Game</h1>
      <h3 className="start-stop-btn">Start Game</h3>
      <h1>{player}</h1>
      <h1>{level}</h1>
      <h1>Score: {score}</h1>
    </header>
  );
}

export default Header;
