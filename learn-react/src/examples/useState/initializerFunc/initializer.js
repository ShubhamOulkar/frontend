import { useState } from "react";

function createTodoInitializer() {
  const todos = [];

  for (let i = 0; i <= 10; i++) {
    todos.push({
      id: i + 1,
      todo: "Todo" + i,
      complete: i % 2 === 0 ? true : false,
    });
  }

  return todos;
}

export default function TodoList() {
  const [todoList, setTodoList] = useState(createTodoInitializer);
  const [text, setText] = useState("");

  function createNewTodo() {
    setText("");
    setTodoList([
      {
        id: todoList.length + 1,
        todo: text,
        complete: false,
      },
      ...todoList,
    ]);
  }

  return (
    <>
      <p>
        This example passes the initializer function, so the createInitialTodos
        function only runs during initialization. It does not run when component
        re-renders, such as when you type into the input.
      </p>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={createNewTodo}>Create todo</button>
      </div>

      <ol type="i">
        {todoList.map((todo) => (
          <li key={todo.id} style={{ color: !todo.complete ? "red" : "green" }}>
            {todo.todo}
          </li>
        ))}
      </ol>
    </>
  );
}
