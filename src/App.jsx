import "./App.scss";
import Player from "./components/Player";
import BackgroundAnimation from "./components/BackgroundAnimation";
import TicTacToeBoard from "./components/TicTacToeBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer;

      if (prevTurns.length > 0) {
        if (prevTurns[0].player === "X") {
          currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }
      } else {
        currentPlayer = "X";
      }
      const newTurn = {
        player: currentPlayer,
        square: { row: rowIndex, col: colIndex },
      };

      return [newTurn, ...prevTurns];
    });

    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
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
