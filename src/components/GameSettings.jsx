function GameSettings({ setPlayer, setLevel, startGame }) {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <label htmlFor="player">
        <b>Player</b>
        <input
          type="text"
          onInput={(e) => setPlayer(e.target.value)}
          placeholder="Enter your name"
        />
      </label>
      <label htmlFor="dificulty">
        <b>Level</b>
        <input
          type="button"
          value="Easy"
          onClick={(e) => setLevel(e.target.value)}
        />
        <input
          type="button"
          value="Medium"
          onClick={(e) => setLevel(e.target.value)}
        />
        <input
          type="button"
          value="Dificult"
          onClick={(e) => setLevel(e.target.value)}
        />
      </label>
      <button onClick={startGame}>Play</button>
    </div>
  );
}

export default GameSettings;
