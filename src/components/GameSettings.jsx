function GameSettings({ playerHandler, levelHandler, startGame }) {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <label htmlFor="player">
        <b>Player</b>
        <input
          type="text"
          onInput={playerHandler}
          placeholder="Enter your name"
        />
      </label>
      <label htmlFor="dificulty">
        <b>Level</b>
        <input type="button" value="Easy" onClick={levelHandler} />
        <input type="button" value="Medium" onClick={levelHandler} />
        <input type="button" value="Dificult" onClick={levelHandler} />
      </label>
      <button onClick={startGame}>Play</button>
    </div>
  );
}

export default GameSettings;
