import { useState } from "react";
import Board from "./board";

function Game() {
  const [history, setHistory] = useState(Array(Array(9).fill(null)));
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const [Xplayer, setXplayer] = useState(true);
  const [scores, setScores] = useState({ x: 0, y: 0 });

  function jumpTo(mov) {
    if (history.length <= 1) return;
    setCurrentMove(mov);
  }

  function restartGame() {
    if (history.length <= 1) return;
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setXplayer(true);
    // setScores({ x: 0, y: 0 });
  }

  const moves = history.map((hist, mov) => {
    let description;
    const isXPlayer = mov % 2 === 0; // Determine if it's X's turn for this move
    if (mov > 0) {
      description = `Go to ${isXPlayer ? "O" : "X"} move #${mov}`;
    } else {
      description = "Go to start";
    }
    return (
      <li key={mov}>
        <button onClick={() => jumpTo(mov)}>{description}</button>
      </li>
    );
  });

  function handleHistory(newSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXplayer(!Xplayer);
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            Xplayer={Xplayer}
            squares={currentSquares}
            onPlay={handleHistory}
            restartGame={restartGame}
            scores={scores}
            setScores={setScores}
          />
        </div>
        <div className="game-info">
          <p>Game History</p>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}

export default Game;
