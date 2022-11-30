import Link from "next/link";
import {ITodo} from "../types/Todo";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: ITodo[] = await res.json();
  return todos;
};

const TodosList = async () => {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <Link href={`/todos/${todo.id}`}>
          <p key={todo.id} className="py-2 px-2 bg-blue-200 mt-5">
            Todo: {todo.id}
          </p>
        </Link>
      ))}
    </>
  );
};

export default TodosList;
