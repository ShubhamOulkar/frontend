import { useEffect, useState, useRef } from "react";
import "./index.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import SVGComponent from "./components/svgComponent";

const BTN = ["All", "Completed", "Active"];

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function App({ tasks }) {
  const listHeadingRef = useRef(null);

  const [taskList, setTaskList] = useState(tasks);

  const prevTaskLength = usePrevious(taskList.length);

  useEffect(() => {
    if (taskList.length < prevTaskLength) {
      listHeadingRef.current.focus();
    }
    const taskUIList = taskList?.map((task) => (
      <Todo
        key={task.id}
        id={task.id}
        name={task.name}
        completed={task.completed}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

    setUilist(taskUIList);
  }, [taskList, taskList.length, prevTaskLength]);

  const taskUIList = taskList?.map((task) => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleCompleted={toggleCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const [active, setActive] = useState("All");

  const btnUIElement = BTN.map((btn) =>
    btn === active ? (
      <FilterButton
        key={btn}
        name={btn}
        handleFilter={handleFilter}
        setActive={setActive}
        active
      />
    ) : (
      <FilterButton
        key={btn}
        name={btn}
        handleFilter={handleFilter}
        setActive={setActive}
      />
    )
  );

  const heading = headingText(taskUIList);

  const [countHeading, setCountHeading] = useState(heading);

  function headingText(taskList) {
    return taskList.length !== 1
      ? `${taskList.length} tasks remaining`
      : `${taskList.length} task remaining`;
  }

  const [UIList, setUilist] = useState(taskUIList);

  function handleFilter(filter) {
    if (filter === "Active") {
      const uiList = taskList
        .filter((task) => task.completed === false)
        .map((task) => (
          <Todo
            key={task.id}
            id={task.id}
            name={task.name}
            completed={task.completed}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ));

      setUilist(uiList);
      setActive(filter);
      const heading = headingText(uiList);
      setCountHeading(heading);
    }

    if (filter === "All") {
      setUilist(taskUIList);
      setActive(filter);
      const heading = headingText(taskUIList);
      setCountHeading(heading);
    }

    if (filter === "Completed") {
      const uiList = taskList
        .filter((task) => task.completed === true)
        .map((task) => (
          <Todo
            key={task.id}
            id={task.id}
            name={task.name}
            completed={task.completed}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ));

      setUilist(uiList);
      setActive(filter);
      const heading = headingText(uiList);
      setCountHeading(heading);
    }
  }

  function toggleCompleted(id) {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(updatedTaskList);
  }

  function capitalizeText(name) {
    return name[0].toUpperCase() + name.substring(1);
  }

  function addTask(task) {
    const newTask = {
      id: `todo-${taskList.length + 1}`,
      name: capitalizeText(task),
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  }

  function deleteTask(id) {
    const deleteTaskFromTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(deleteTaskFromTaskList);

    const heading = headingText(deleteTaskFromTaskList);
    setCountHeading(heading);
  }

  function editTask(id, newName) {
    const editTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, name: capitalizeText(newName) };
      }
      return task;
    });

    setTaskList(editTaskList);
  }

  return (
    <div className="todoapp stack-large">
      <SVGComponent />
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{btnUIElement}</div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {countHeading}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {UIList}
      </ul>
    </div>
  );
}

export default App;
