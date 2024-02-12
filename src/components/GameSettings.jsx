function GameSettings({ setPlayer, setLevel, startGame }) {
  return (
    <div className="settings">
      <label htmlFor="player">
        <b>Player</b>
        <input
          type="text"
          onInput={(e) => setPlayer(e.target.value)}
          placeholder="Enter your name"
        />
      </label>
      <label htmlFor="level">
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
          value="Difficult"
          onClick={(e) => setLevel(e.target.value)}
        />
      </label>
      <button className="play-btn" onClick={startGame}>
        Play
      </button>
    </div>
  );
}

export default GameSettings;
