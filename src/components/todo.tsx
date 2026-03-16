export interface ITodo {
  title: string;
  id: string;
  desc: string;
  isCompleted: boolean;
  isUpdated: boolean;
}

export const Todo:React.FC<ITodo> =({title, id, desc, isCompleted, isUpdated})=>{
    return (
        <li key={id}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <button type="button">delete</button>
              <button type="button">update</button>
              <input type="checkbox" />
        </li>
    )
}