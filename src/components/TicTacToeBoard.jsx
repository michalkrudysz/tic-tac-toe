function TicTacToeBoard() {
  const initialTicTacToeBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return (
    <ol id="tic-tac-toe-board">
      {initialTicTacToeBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => {
              let id = `cell-${rowIndex * 3 + cellIndex}`;
              return (
                <li key={cellIndex}>
                  <button className={id}>{cell}</button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default TicTacToeBoard;
