import React, { useState, useEffect } from "react";
import "../App.scss";

function random(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FloatingSymbol({ symbol, index }) {
  const [position, setPosition] = useState({
    x: random(window.innerWidth - 50),
    y: random(window.innerHeight - 50),
  });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        x: random(window.innerWidth - 50),
        y: random(window.innerHeight - 50),
      });
    };

    updatePosition();

    const intervalId = setInterval(updatePosition, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMouseOver = () => {
    setPosition((prevPosition) => ({
      x: prevPosition.x + (prevPosition.x < window.innerWidth / 2 ? 100 : -100),
      y:
        prevPosition.y + (prevPosition.y < window.innerHeight / 2 ? 100 : -100),
    }));
  };

  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: "left 10s linear, top 10s linear", 
  };

  return (
    <div
      key={index}
      className={`symbol symbol-${symbol}`}
      style={style}
      onMouseOver={handleMouseOver}
    >
      {symbol}
    </div>
  );
}

function BackgroundAnimation() {
  const symbolElements = [];

  for (let i = 0; i < 10; i++) {
    symbolElements.push(
      <FloatingSymbol key={i} symbol={i % 2 === 0 ? "X" : "O"} />
    );
  }

  return <>{symbolElements}</>;
}

export default BackgroundAnimation;
