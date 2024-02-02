import "./App.scss";

function App() {
  return (
    <main>
      <div id="game">
        <ol id="players">
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Player 2</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
      </div>
      <p>Logi z gry</p>
    </main>
  );
}

export default App;
