import { useState } from "react";

export default function CreateTaskForm({ addTaskToList }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTaskToList(text);
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">
          Add task:{" "}
          <input
            type="text"
            id="task"
            placeholder="add task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </>
  );
}
