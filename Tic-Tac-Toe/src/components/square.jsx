function Square({ value, onSquareClick, color, Xplayer }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{
        backgroundColor: color,
      }}
      disabled={Xplayer ? false : true}
    >
      {value}
    </button>
  );
}

export default Square;
