import { useState } from "react";
import TaskForm from "./editForm";

export default function TaskList({ tasks, editTask, deleteTask }) {
  const [edit, setEdit] = useState(0);
  return (
    <>
      <ol>
        {tasks.map((task) => (
          <li key={task.id} style={{ color: !task.status ? "red" : "green" }}>
            {task.id !== edit ? (
              <h4>{task.task}</h4>
            ) : (
              <TaskForm task={task} form={editTask} setEdit={setEdit} />
            )}

            {task.id !== edit && (
              <button onClick={() => setEdit(task.id)}>Edit</button>
            )}
            <button type="button" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
