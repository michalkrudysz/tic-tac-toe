import "./App.scss";
import Player from "./components/Player";
import BackgroundAnimation from "./components/BackgroundAnimation";
import TicTacToeBoard from "./components/TicTacToeBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver";

// Zaktualizowana nazwa stałej dla czytelności
const INITIAL_TIC_TAC_TOE_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Funkcja pomocnicza do określenia aktywnego gracza
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

// Funkcja pomocnicza do określania zwycięzcy
function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      gameBoard[a.row][a.column] &&
      gameBoard[a.row][a.column] === gameBoard[b.row][b.column] &&
      gameBoard[a.row][a.column] === gameBoard[c.row][c.column]
    ) {
      winner = gameBoard[a.row][a.column];
      break;
    }
  }
  return winner ? players[winner] : null;
}

// Funkcja pomocnicza do wyprowadzenia planszy gry
function deriveGameBoard(gameTurns) {
  let gameBoard = INITIAL_TIC_TAC_TOE_BOARD.map((row) => [...row]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  }
  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Gracz 1",
    O: "Gracz 2",
  });

  function restartGame() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  }

  const gameBoard = deriveGameBoard(gameTurns);
  const activePlayer = deriveActivePlayer(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => [
      ...prevTurns,
      { square: { row: rowIndex, col: colIndex }, player: activePlayer },
    ]);
  }

  return (
    <>
      <BackgroundAnimation />
      <main>
        <div id="game">
          <ol id="players">
            <li>
              <Player
                playerName={players.X}
                playerSymbol="X"
                isActivePlayer={activePlayer === "X"}
                onNameChange={(newName) => handlePlayerNameChange("X", newName)}
              />
            </li>
            <li>
              <Player
                playerName={players.O}
                playerSymbol="O"
                isActivePlayer={activePlayer === "O"}
                onNameChange={(newName) => handlePlayerNameChange("O", newName)}
              />
            </li>
          </ol>
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
