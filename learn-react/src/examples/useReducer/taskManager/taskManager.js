import { useReducer } from "react";
import CreateTaskForm from "./createTaskForm";
import TaskList from "./takList";

const tasks_list = [
  { id: 1, task: "add eslint configurations", status: false },
  { id: 2, task: "watch k-dramas", status: true },
  { id: 3, task: "Deploy to production", status: false },
];
let nextId = 4;

export default function TaskManager() {
  const [tasks, dispatch] = useReducer(taskManagerReducer, tasks_list);

  const addTaskToList = (text) => {
    dispatch({
      type: "create",
      id: nextId++,
      text: text,
      status: false,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "delete",
      id: id,
    });
  };

  const editTask = (task) => {
    dispatch({
      type: "edit",
      task: task,
    });
  };

  return (
    <>
      <CreateTaskForm addTaskToList={addTaskToList} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </>
  );
}

function taskManagerReducer(tasks, action) {
  switch (action.type) {
    case "create": {
      return [...tasks, { id: nextId++, task: action.text, status: false }];
    }
    case "edit": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error("This is not valid action");
    }
  }
}
