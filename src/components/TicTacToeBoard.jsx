export default function TicTacToeBoard({ onSelectSquare, board }) {
  return (
    <ol id="tic-tac-toe-board">
      {board.map((row, rowIndex) => (
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
