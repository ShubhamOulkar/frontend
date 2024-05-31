import Square from "./square";

const SquareGrid = ({ squares, winner, handleClick, Xplayer }) => (
  <div className="board">
    {squares.map((_, i) => (
      <Square
        key={i}
        value={squares[i]}
        onSquareClick={() => handleClick(i)}
        color={winner ? (winner.includes(i) ? "green" : "pink") : "white"}
        Xplayer={!winner ? Xplayer : true}
      />
    ))}
  </div>
);

export default SquareGrid;
