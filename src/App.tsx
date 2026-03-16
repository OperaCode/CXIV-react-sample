import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Todo, type ITodo } from "./components/todo";

// hooks => useState, useCallBack, useMemo, useContext, useEffect , useRef
// addTodo, deleteTodo, updateTodo, markTodoAsComplete, searchTodo
// custom hooks

function App() {
  const [todos, setTodos] = useState<ITodo[] | null>(null);

  const handleSubmit = () => {
    
  };

  return (
    <>
      <h1>Todos</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="type in your description" />

        <button type="submit">Create todo</button>
      </form>

      <ul>
        {todos &&
          todos.map((todo) => (
            <Todo
              key={todo.id}
              // title={todo.title}
              // id={todo.id}
              // desc={todo.desc}
              // isCompleted={todo.isCompleted}
              // isUpdated={todo.isUpdated}
              {...todo}
            />
          ))}
      </ul>
      {/* <ul>
        <li>
          <p>{todos && todos[0].title}</p>
        </li>
        <li>
          <p>{todos && todos[1].title}</p>
        </li>
      </ul> */}
    </>
  );
}

export default App;
