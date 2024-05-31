// src/components/Game.js
import { useState, useEffect } from "react";
import Board from "./board";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  useEffect(() => {
    if (!xIsNext) {
      const current = history[stepNumber];
      const squares = current.squares.slice();
      const bestMove = findBestMove(squares);
      handleClick(bestMove);
    }
  }, [xIsNext]);

  const handleClick = (i) => {
    const historyUpToCurrentStep = history.slice(0, stepNumber + 1);
    const current = historyUpToCurrentStep[historyUpToCurrentStep.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setHistory(historyUpToCurrentStep.concat([{ squares }]));
    setStepNumber(historyUpToCurrentStep.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const findBestMove = (squares) => {
  let bestVal = -1000;
  let bestMove = -1;

  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      squares[i] = "O";
      let moveVal = minimax(squares, 0, false);
      squares[i] = null;

      if (moveVal > bestVal) {
        bestMove = i;
        bestVal = moveVal;
      }
    }
  }

  return bestMove;
};

const minimax = (squares, depth, isMax) => {
  const score = evaluate(squares);

  if (score === 10) return score - depth;
  if (score === -10) return score + depth;
  if (isMovesLeft(squares) === false) return 0;

  if (isMax) {
    let best = -1000;

    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = "O";
        best = Math.max(best, minimax(squares, depth + 1, !isMax));
        squares[i] = null;
      }
    }

    return best;
  } else {
    let best = 1000;

    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = "X";
        best = Math.min(best, minimax(squares, depth + 1, !isMax));
        squares[i] = null;
      }
    }

    return best;
  }
};

const evaluate = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === squares[b] && squares[b] === squares[c]) {
      if (squares[a] === "O") return 10;
      else if (squares[a] === "X") return -10;
    }
  }

  return 0;
};

const isMovesLeft = (squares) => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) return true;
  }
  return false;
};

export default Game;
