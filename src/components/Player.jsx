function Player({ playerName, playerSymbol }) {
  return (
    <span className="player">
      <span className="player-name">{playerName}</span>
      <span className="player-symbol">{playerSymbol}</span>
      <button>Edytuj</button>
    </span>
  );
}

export default Player;
