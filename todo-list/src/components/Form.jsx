import { useState, useRef } from "react";

function Form({ addTask }) {
  const [taskName, setTaskName] = useState("");
  //   const inputEle = useRef();

  function handleAddTask(e) {
    e.preventDefault();
    // set new task in task object
    taskName && addTask(taskName);
    // clear input element
    // taskName && (inputEle.current.value = "");
    setTaskName("");
  }

  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        // ref={inputEle}
      />
      <button
        type="submit"
        className="btn btn__primary btn__lg"
        onClick={handleAddTask}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
