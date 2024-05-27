import { useState } from "react";
import Board from "./board";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const Xplayer = currentMove % 2 === 0;

  function jumpTo(mov) {
    setCurrentMove(mov);
  }

  const moves = history.map((hist, mov) => {
    let description;
    if (mov > 0) {
      description = `Go to move # ${mov}`;
    } else {
      description = "Go to start";
    }

    return (
      <li>
        <button key={mov} onClick={() => jumpTo(mov)}>
          {description}
        </button>
      </li>
    );
  });

  function handleHistory(newSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            Xplayer={Xplayer}
            squares={currentSquares}
            onPlay={handleHistory}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}

export default Game;
