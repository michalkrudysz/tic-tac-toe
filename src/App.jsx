import "./App.scss";
import Player from "./components/Player";
import BackgroundAnimation from "./components/BackgroundAnimation";
import TicTacToeBoard from "./components/TicTacToeBoard";

function App() {
  return (
    <>
      <BackgroundAnimation />
      <main>
        <div id="game">
          <ol id="players">
            <li>
              <Player playerName={"Gracz 1"} playerSymbol={"X"} />
            </li>
            <li>
              <Player playerName={"Gracz 2"} playerSymbol={"O"} />
            </li>
          </ol>
          <TicTacToeBoard />
        </div>
        <p>Logi z gry</p>
      </main>
    </>
  );
}

export default App;
