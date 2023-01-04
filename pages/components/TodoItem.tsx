import {ITodo} from "../types";
import styles from "../../styles/Home.module.css";

function TodoItem({todo, todos, setTodos}: { todo: ITodo, todos: ITodo[], setTodos: any }) {
  const handleDelete = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: "DELETE"
    });

    const newTodos = todos.filter(tmpTodo => tmpTodo.id !== todo.id)

    setTodos(newTodos)
  };

  const handleCheck = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({
        data: {
          completed: !todo.completed
        }
      }),
    });
  };

  return (
    <div>
      <span className={styles.eachtodo}>
        <p className={styles.text}>{todo.title}</p>
        <div>
          <input
            type="checkbox"
            className={styles.toggle}
            defaultChecked={todo.completed}
            onChange={handleCheck}
          />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </span>
    </div>
  );
}

export default TodoItem;
