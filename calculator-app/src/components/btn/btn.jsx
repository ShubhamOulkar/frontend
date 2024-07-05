import "./btn.css";

export default function Btn({ value, onClick }) {
  return (
    <>
      <button onClick={() => onClick(value)}>{value}</button>
    </>
  );
}
