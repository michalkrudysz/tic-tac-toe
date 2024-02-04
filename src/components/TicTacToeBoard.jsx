import { useState } from "react";

export default function TicTacToeBoard({ onSelectSquare, activePlayer }) {
  const initialTicTacToeBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [ticTacToeBoard, setTicTacToeBoard] = useState(initialTicTacToeBoard);

  function handleSelectSquare(rowIndex, cellIndex) {
    const updatedTicTacToeBoard = ticTacToeBoard.map((row) => [...row]);
    if (updatedTicTacToeBoard[rowIndex][cellIndex] === null) {
      updatedTicTacToeBoard[rowIndex][cellIndex] = activePlayer;
      setTicTacToeBoard(updatedTicTacToeBoard);
      onSelectSquare();
    }
  }

  return (
    <ol id="tic-tac-toe-board">
      {ticTacToeBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => {
              let id = `cell-${rowIndex * 3 + cellIndex}`;
              return (
                <li key={cellIndex}>
                  <button
                    className={id}
                    onClick={() => handleSelectSquare(rowIndex, cellIndex)}
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
