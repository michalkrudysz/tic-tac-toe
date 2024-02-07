import "./App.scss";
import Player from "./components/Player";
import BackgroundAnimation from "./components/BackgroundAnimation";
import TicTacToeBoard from "./components/TicTacToeBoard";
import Log from "./components/Log";
import { useState } from "react";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

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
          </ol>
          <TicTacToeBoard
            onSelectSquare={handleSelectSquare}
            turns={gameTurns}
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
