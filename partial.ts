interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "learn TypeScript",
  description: "study its utility types",
};

// You can update only the part you need
const todo2 = updateTodo(todo1, {
  description: "practice by writing TypeScript code",
});
