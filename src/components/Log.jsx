function Log({ gameTurns }) {
  return (
    <ol id="log">
      <h2>Historia gry</h2>
      {gameTurns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Gracz {turn.player} postawił znak na polu: {turn.square.row},{" "}
          {turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
