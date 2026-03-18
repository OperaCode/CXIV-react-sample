import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "/App.css";
import { Todo, type ITodo } from "./components/todo";

// hooks => useState, useCallBack, useMemo, useContext, useEffect , useRef
// addTodo, deleteTodo, updateTodo, markTodoAsComplete, searchTodo
// custom hooks

function App() {
  const [todos, setTodos] = useState<ITodo[] | null>(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateTodoId, setUpdateTodoId] = useState("");

  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !desc) {
      return;
    }
    if (isUpdating) {
      if (updateTodoId == "") return;
      if (!todos) return;
      // const todo = todos.find((ele) => ele.id == updateTodoId );
      const updatedTodos = todos.map((ele) => {
        if (ele.id === updateTodoId) {
          ele.title = title;
          ele.desc = desc;
          ele.isUpdated = true;
        }
        return ele;
      });
      setTodos(updatedTodos);
      setIsUpdating(false);
      setUpdateTodoId("");
      resetFormValues();
      return;
    }

    const formBody: ITodo = {
      title: title.trim(),
      desc: desc.trim(),
      isCompleted: false,
      isUpdated: false,
      id: `${todos?.length}${title}`,
    };
    resetFormValues();
    if (!todos) {
      setTodos([formBody]);
      return;
    }
    setTodos([...todos, formBody]);
  };
  const resetFormValues = () => {
    setTitle("");
    setDesc("");
  };

  // const handleDelete =(id : string)=> {
  //   if(!todos){
  //     return;
  //   }
  //   const filteredTodos = todos.filter((todo) => {
  //     return todo.id !== id
  //   });
  //   setTodos(filteredTodos);
  // }

  const handleUpdateTodo = (id: string) => {
    if (!todos) return;
    const todo = todos.find((ele) => ele.id == id);
    if (!todo) return;
    if (todo.isCompleted) return;
    setTitle(todo.title);
    setDesc(todo.desc);
    setIsUpdating(true);
    setUpdateTodoId(id);
  };

  return (
    <>
      <h1>Todos</h1>

      <form onSubmit={createTodo}>
        <input
          type="text"
          placeholder="title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          value={title}
          
        />
        <input
          type="text"
          placeholder="type in your description"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDesc(e.target.value)
          }
          value={desc}
          
        />

        <button type="submit">
          {isUpdating ? "Update Todo" : "Create todo"}
        </button>
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
              setTodos={setTodos}
              todos={todos}
              handleUpdateTodo={() => handleUpdateTodo(todo.id)}
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
