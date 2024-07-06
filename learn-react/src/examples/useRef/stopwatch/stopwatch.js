import { useState, useRef } from "react";

export default function StopWatch() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const clearRef = useRef(null);
  const [timeIntervals, setTimeIntervals] = useState([0]);

  let time = 0.0;
  if (start !== null && now !== null) {
    time = ((now - start) / 1000).toFixed(3);
  }

  const stopWatch = () => {
    clearInterval(clearRef.current);
    setTimeIntervals([...timeIntervals, time]);
    console.log("watch stoped....:", start / 1000, now / 1000, timeIntervals);
  };

  const startWatch = () => {
    setStart(Date.now());

    clearRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1);
  };

  return (
    <>
      <hr />
      <p>Stop watch: {time}</p>
      <button onClick={startWatch}>Start</button>
      <button onClick={stopWatch}>Stop</button>
      <div>
        <p>Time Intervals :</p>
        <ul>
          {timeIntervals.map((interval, i) => (
            <li key={i}>
              {i}: {interval} sec
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
