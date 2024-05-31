function ScoreBoard({ scoreX, scoreY }) {
  return (
    <>
      <p>Scores:</p>
      <div>
        <p>
          X user: <span>{scoreX}</span>
        </p>
        <p>
          AI user: <span>{scoreY}</span>
        </p>
      </div>
    </>
  );
}

export default ScoreBoard;
