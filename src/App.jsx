import "./App.scss";
import Player from "./components/Player";
import BackgroundAnimation from "./components/BackgroundAnimation";
import TicTacToeBoard from "./components/TicTacToeBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, cellIndex) {
    setGameTurns((prevTurns) => [
      ...prevTurns,
      { player: activePlayer, row: rowIndex, cell: cellIndex },
    ]);

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
            activePlayer={activePlayer}
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
