export interface ITodo {
  title: string;
  id: string;
  desc: string;
  isCompleted: boolean;
  isUpdated: boolean;
}

interface ITodoComp extends ITodo {
  setTodos : React.Dispatch<React.SetStateAction<ITodo[] | null>>;
  todos : ITodo[] | null;
  handleUpdateTodo : () => void;
}

export const Todo: React.FC<ITodoComp> = ({
  title,
  id,
  desc,
  isCompleted,
  isUpdated,
  setTodos,
  todos,
  handleUpdateTodo
}) => {
  const handleDelete = (id: string) => {
    if (!todos) {
      return;
    }
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  };
  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button type="button" onClick={() => handleDelete(id)}>
        delete
      </button>
      <button type="button" onClick={handleUpdateTodo}>update</button>
      <input type="checkbox" />
    </li>
  );
};
