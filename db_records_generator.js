// Save as generateTodos.js and run with: node generateTodos.js
const fs = require('fs');
const todos = [];
for (let id = 1; id <= 500; id++) {
  todos.push({
    id,
    todoText: `Task ${id}`,
    completed: id % 5 === 0,
    important: id % 7 === 0
  });
}
fs.writeFileSync('generated_todos.json', JSON.stringify(todos, null, 2));