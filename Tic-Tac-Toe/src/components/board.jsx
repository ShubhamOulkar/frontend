import { useEffect, useState } from "react";
import calculateWinner from "../helpers/calculateWinner";
import SquareGrid from "./grid";
import findBestMove from "../helpers/aiOpponent";
import ScoreBoard from "./score";

function Board({ Xplayer, squares, onPlay, restartGame, scores, setScores }) {
  let winner;

  useEffect(() => {
    if (!Xplayer) {
      /* //opponent by random number generator 
      const emptySquares = squares
        .map((square, i) => (square === null ? i : null))
        .filter((square) => square !== null);
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const randomSquare = emptySquares[randomIndex];

      if (squares[randomSquare] || calculateWinner(squares)) return;

      const nextBoard = squares.slice();
      nextBoard[randomSquare] = "O";
      console.log("nextBoard :", nextBoard);
     */

      // minimax algorithem
      const opponentChoice = findBestMove(squares);
      const nextBoard = squares.slice();
      nextBoard[opponentChoice] = "O";

      setTimeout(() => {
        onPlay(nextBoard);
      }, 1000);
    }

    if (winner === "X") {
      setScores({ ...scores, x: scores.x + 1 });
    }
    if (winner === "O") {
      setScores({ ...scores, y: scores.y + 1 });
    }
  }, [Xplayer, winner]);

  const winnerSquares = calculateWinner(squares);
  let status;

  if (winnerSquares) {
    winner = squares[winnerSquares[0]];
    status = `Winner : ${winner} 🏆`;
  } else if (!squares.filter((i) => i === null).length) {
    status = "Match Draws ❌";
  } else {
    status = `Current player : ${Xplayer ? "X" : "O"}`;
  }

  function handleClick(squ) {
    if (squares[squ] || calculateWinner(squares)) return;

    const nextBoard = squares.slice();
    nextBoard[squ] = "X";
    onPlay(nextBoard);
  }

  return (
    <>
      <div>
        <div>{status}</div>
        <button onClick={() => restartGame()}>Restart Game</button>
      </div>
      <div className="board">
        <SquareGrid
          winner={winnerSquares}
          squares={squares}
          handleClick={handleClick}
          Xplayer={Xplayer}
        />
      </div>
      <div className="board">
        <ScoreBoard scoreX={scores.x} scoreY={scores.y} />
      </div>
    </>
  );
}

export default Board;
