// Omit
function getTodoPreview(todo) {
    var completed = todo.completed, description = todo.description, title = todo.title;
    return { title: title, description: description, completed: completed }; // 'completed' is omitted
}
var todo = {
    title: "learn TypeScript",
    description: "understand its features",
    completed: false,
};
var preview = getTodoPreview(todo);
console.log("preview", preview);
