function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Koniec Gry</h2>
      {winner ? <p>{winner} wygrał!</p> : <p>To remis!</p>}
      <button onClick={onRestart}>Zrestartuj Grę</button>
    </div>
  );
}

export default GameOver;
