import Square from "./square";
import calculateWinner from "../calculateWinner";

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

export default Board;
