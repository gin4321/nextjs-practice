import ITodo from "../types";
import TodoItem from "./TodoItem";
import styles from "../../styles/Home.module.css";
import {useEffect, useState, useRef} from "react";

function Todo() {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");

      setTodos(await res.json());
    }

    fetchTodos()
  }, []);

  const handleSubmit = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        data: {
          title: inputRef.current!.value,
        }
      }),
    });

    const newTodos = [{
      title: inputRef.current!.value,
      completed: false,
    }, ...todos]

    setTodos(newTodos)
  };

  return (
    <div className={styles.maincont}>
      <h1>Todo App</h1>
      <div className={styles.newtodo}>
        <h3>Add new todo</h3>
        <div className={styles.semi}>
          <input type="text" ref={inputRef}/>
          <button onClick={handleSubmit}>Add Todo</button>
        </div>
      </div>
      <div>
        {todos &&
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>
          ))}
      </div>
    </div>
  );
}

export default Todo;
