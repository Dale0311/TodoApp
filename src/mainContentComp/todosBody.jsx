/* eslint-disable react/prop-types */
import Todo from "./todo";
import Loading from "../loading";
import NoTodos from "../noTodos";
function TodosBody({ todos, isLoading }) {
  const arrTodos = todos.map((todo) => {
    return <Todo key={todo.id} title={todo.title} date={todo.date} />;
  });
  const todosLength = arrTodos.length;
  return (
    <>{isLoading ? <Loading /> : todosLength < 1 ? <NoTodos /> : arrTodos}</>
  );
}

// <ul className="mt-5">
//         {arrTodos}
//       </ul>) :

export default TodosBody;
