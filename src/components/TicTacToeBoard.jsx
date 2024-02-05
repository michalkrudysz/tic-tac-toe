export default function TicTacToeBoard({ onSelectSquare, turns }) {
  const initialTicTacToeBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    initialTicTacToeBoard[row][col] = player;
  }

  return (
    <ol id="tic-tac-toe-board">
      {initialTicTacToeBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => {
              let id = `cell-${rowIndex * 3 + cellIndex}`;
              return (
                <li key={cellIndex}>
                  <button
                    className={id}
                    onClick={() => onSelectSquare(rowIndex, cellIndex)}
                    disabled={cell != null}
                  >
                    {cell}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}
