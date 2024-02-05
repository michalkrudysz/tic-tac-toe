function Log({ gameTurns }) {
  return (
    <ol id="log">
      <h2>Historia gry</h2>
      {gameTurns.map((turn, index) => (
        <li key={index}>
          Gracz {turn.player} postawił znak na polu: {turn.row}, {turn.cell}
        </li>
      ))}
    </ol>
  );
}

export default Log;
