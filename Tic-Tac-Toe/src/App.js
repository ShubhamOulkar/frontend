import { useState } from "react";

function Square({ value, onSquareClick, color }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{
        backgroundColor: color,
      }}
    >
      {value}
    </button>
  );
}

function Board({ Xplayer, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner : ${squares[winner[0]]} 🏆`;
  } else if (!squares.filter((i) => i === null).length) {
    status = "Match Draws ❌";
  } else {
    status = `Current player : ${Xplayer ? "X" : "O"}`;
  }

  function handleClick(squ) {
    if (squares[squ] || calculateWinner(squares)) return;

    const nextBoard = squares.slice();

    Xplayer ? (nextBoard[squ] = "X") : (nextBoard[squ] = "O");

    onPlay(nextBoard);
  }

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          color={winner ? (winner.includes(0) ? "green" : "pink") : "white"}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          color={winner ? (winner.includes(1) ? "green" : "pink") : "white"}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          color={winner ? (winner.includes(2) ? "green" : "pink") : "white"}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          color={winner ? (winner.includes(3) ? "green" : "pink") : "white"}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          color={winner ? (winner.includes(4) ? "green" : "pink") : "white"}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          color={winner ? (winner.includes(5) ? "green" : "pink") : "white"}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          color={winner ? (winner.includes(6) ? "green" : "pink") : "white"}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          color={winner ? (winner.includes(7) ? "green" : "pink") : "white"}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          color={winner ? (winner.includes(8) ? "green" : "pink") : "white"}
        />
      </div>
    </>
  );
}

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

function calculateWinner(state) {
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
    if (state[a] && state[a] === state[b] && state[a] === state[c]) {
      return [a, b, c];
    }
  }

  return null;
}

export default Game;
