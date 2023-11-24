// Omit

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "completed">;

function getTodoPreview(todo: Todo): TodoPreview {
  const { title, description } = todo;
  return { title, description }; // 'completed' is omitted
}

const todo: Todo = {
  title: "learn TypeScript",
  description: "understand its features",
  completed: false,
};
const preview = getTodoPreview(todo);
console.log("preview", preview);
