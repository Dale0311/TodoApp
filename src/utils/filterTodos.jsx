function filteredTodos(todos, filterType) {
  let returnTodos = [];
  switch (filterType) {
    case "active":
      returnTodos = todos.filter((todo) => todo.completed === false);
      break;
    case "completed":
      returnTodos = todos.filter((todo) => todo.completed === true);
      break;
    default:
      returnTodos = todos;
  }
  return returnTodos;
}

export default filteredTodos;
