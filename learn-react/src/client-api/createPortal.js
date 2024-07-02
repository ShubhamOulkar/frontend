import { createPortal } from "react-dom";

export default function MyComponent() {
  return (
    <div style={{ border: "2px solid black" }}>
      <p>This child is placed in the parent div of MyComponent().</p>
      {createPortal(
        <p>
          This child is placed in the document body by using createPortal().
          Actually it is defined inside MyComponent() function.
        </p>,
        document.body
      )}
    </div>
  );
}
