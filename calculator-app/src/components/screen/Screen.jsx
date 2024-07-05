import "./screen.css";

export default function Screen({ value }) {
  return (
    <div className="screen">
      {/* <p>{expression}</p> */}
      <label htmlFor="screen" hidden>
        Calculator screen
      </label>
      <input id="screen" type="text" value={value} tabIndex="-1" readOnly />
    </div>
  );
}
