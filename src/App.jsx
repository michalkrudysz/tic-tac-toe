import "./App.scss";
import Player from "./components/Player";

function App() {
  return (
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
        Plansza gry
      </div>
      <p>Logi z gry</p>
    </main>
  );
}

export default App;
