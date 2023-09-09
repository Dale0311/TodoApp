/* eslint-disable react/prop-types */
import Todo from "./todo";
import NoTodos from "../noTodos";
function TodosBody({ todos }) {
  const arrTodos = todos.map((todo) => {
    return <Todo key={todo.id} title={todo.title} date={todo.date} />;
  });
  const todosLength = arrTodos.length;
  return <>{todosLength > 0 ? <ul>{arrTodos}</ul> : <NoTodos />}</>;
}

// <ul className="mt-5">
//         {arrTodos}
//       </ul>) :

export default TodosBody;
