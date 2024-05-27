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

export default Square;
