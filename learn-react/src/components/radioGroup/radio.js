import { Children, cloneElement } from "react";

function Radio({ children }) {
  return (
    <div
      className="radio-container"
      style={{ width: 60, backgroundColor: "orange" }}
    >
      {Children.map(children, (child, i) => {
        return cloneElement(child, {
          id: i,
          style: {
            ...child.style,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
        });
      })}
    </div>
  );
}

export default function RadioComponent() {
  return (
    <Radio>
      {/* this label id will be overwritten by cloned child */}
      <label id="a">
        React <input type="radio" name="radio" defaultChecked />
      </label>
      <label id="b">
        JS <input type="radio" name="radio" />
      </label>
      <label id="c">
        CSS <input type="radio" name="radio" />
      </label>
    </Radio>
  );
}
