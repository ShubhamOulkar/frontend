export default function Row({ title, isHighlighted }) {
  return (
    <div style={{ backgroundColor: isHighlighted ? "red" : "green" }}>
      {title}
    </div>
  );
}
