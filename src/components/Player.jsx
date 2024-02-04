import { useState } from "react";

function Player({ playerName, playerSymbol, isActivePlayer }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [editableName, setEditableName] = useState(playerName);

  function handleEditClick() {
    setIsEditing((prev) => !prev);
    setIsActive((prev) => !prev);
  }

  let player = <span className="player-name">{editableName}</span>;
  if (isEditing) {
    player = (
      <input
        type="text"
        required
        value={editableName}
        onChange={(e) => setEditableName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleEditClick();
        }}
      />
    );
  }

  return (
    <span className={`player ${isActivePlayer ? "active" : ""}`}>
      <span className="player-symbol">{playerSymbol}</span>
      {player}
      <button className={isActive ? "active" : ""} onClick={handleEditClick}>
        {isEditing ? "Zapisz" : "Edytuj"}
      </button>
    </span>
  );
}

export default Player;
