/* eslint-disable react/prop-types */
import Todo from "./todo";
import Loading from "../loading";
import NoTodos from "../noTodos";
function TodosBody({
  todos,
  isLoading,
  setShowModal,
  handleCompleteTodo,
  handleDeleteTodo,
  filterType,
}) {
  const arrTodos = todos.map((todo) => {
    return (
      <Todo
        id={todo.id}
        key={todo.id}
        title={todo.title}
        completed={todo.completed}
        date={todo.date}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    );
  });
  const todosLength = arrTodos.length;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : todosLength < 1 ? (
        <NoTodos setShowModal={setShowModal} filterType={filterType} />
      ) : (
        <ul>{arrTodos}</ul>
      )}
    </>
  );
}

// <ul className="mt-5">
//         {arrTodos}
//       </ul>) :

export default TodosBody;
