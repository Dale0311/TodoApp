/* eslint-disable react/prop-types */
function Status({ todos }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="flex gap text-xl text-center font-semibold">
      <div className="flex-1 text-center">
        <p>{todos.length}</p>
        <p className="font-normal text-base">All</p>
      </div>
      <div className="flex-1 ">
        <p>{activeTodos.length}</p>
        <p className="font-normal text-base">Active</p>
      </div>
      <div className="flex-1 text-center">
        <p>{completedTodos.length}</p>
        <p className="font-normal text-base">Completed</p>
      </div>
    </div>
  );
}

export default Status;
