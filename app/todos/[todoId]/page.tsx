import {ITodo} from "../../../types/Todo";
import {notFound} from "next/navigation";

// export const dynamiCParams = true;

interface propsTypes {
  params: {
    todoId: string;
  };
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {next: {revalidate: 60}}
  );
  const todo: ITodo = await res.json();
  return todo;
};

const TodoPage = async ({params: {todoId}}: propsTypes) => {
  const todoDetails = await fetchTodo(todoId);
  if (!todoDetails.id) {
    return notFound();
  }

  return (
    <div className="flex justify-center">
      <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg max-w-2xl">
        <p>
          #{todoDetails.id}: {todoDetails.title}
        </p>
        <p>Completed: {todoDetails.completed ? "yes" : "no"}</p>
        <p className="border-t border-black mt-5 text-left">
          By user: {todoDetails.userId}
        </p>
      </div>
    </div>
  );
};

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos: ITodo[] = await res.json();

  const pagesToGenerate = todos
    .map((todo) => {
      return {todoId: todo.id.toString()};
    })
    .splice(0, 15);

  return pagesToGenerate;
}
