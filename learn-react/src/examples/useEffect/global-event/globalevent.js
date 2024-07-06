import { useEffect, useState } from "react";

export default function GlobalEvent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: -10,
        left: -10,
        backgroundColor: "pink",
        width: 20,
        height: 20,
        transform: `translate(${position.x}px,${position.y}px)`,
        borderRadius: "50%",
        pointerEvents: "none",
        opacity: 0.6,
      }}
    />
  );
}
