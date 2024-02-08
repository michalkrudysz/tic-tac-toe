import "./App.scss";
import Player from "./components/Player";
import BackgroundAnimation from "./components/BackgroundAnimation";
import TicTacToeBoard from "./components/TicTacToeBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver";

const initialTicTacToeBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  function restartGame() {
    setGameTurns([]);
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialTicTacToeBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;
  const hasDraw = gameTurns.length === 9 && !winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      const newTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return newTurn;
    });
  }

  return (
    <>
      <BackgroundAnimation />
      <main>
        <div id="game">
          <ol id="players">
            <li>
              <Player
                playerName={"Gracz 1"}
                playerSymbol={"X"}
                isActivePlayer={activePlayer === "X"}
              />
            </li>
            <li>
              <Player
                playerName={"Gracz 2"}
                playerSymbol={"O"}
                isActivePlayer={activePlayer === "O"}
              />
            </li>
          </ol>{" "}
          {(winner || hasDraw) && (
            <GameOver onRestart={restartGame} winner={winner} />
          )}
          <TicTacToeBoard
            onSelectSquare={handleSelectSquare}
            board={gameBoard}
          />
        </div>
        <div id="logs">
          <Log gameTurns={gameTurns} />
        </div>
      </main>
    </>
  );
}

export default App;
