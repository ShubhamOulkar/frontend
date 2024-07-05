import "./screen.css";

export default function Screen({ value }) {
  return (
    <div className="screen">
      {/* <p>{expression}</p> */}
      <input type="text" value={value} tabIndex="-1" readOnly />
    </div>
  );
}
