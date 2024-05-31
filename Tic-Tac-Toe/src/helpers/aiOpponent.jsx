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

export default findBestMove;
