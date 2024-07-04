import { useState } from "react";

export default function TaskForm(props) {
  const [newTask, setNewTask] = useState(props.task.task);
  const [status, setStatus] = useState(props.task.status);
  const saveTask = (e) => {
    e.preventDefault();
    props.form({ id: props.task.id, task: newTask, status: status });
    props.setEdit(0);
  };

  return (
    <>
      <form onSubmit={saveTask}>
        <input
          type="checkbox"
          onChange={() => setStatus(!status)}
          checked={status}
        />
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button>Save</button>
      </form>
    </>
  );
}
