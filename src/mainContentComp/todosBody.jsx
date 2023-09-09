/* eslint-disable react/prop-types */
import Todo from "./todo";
function TodosBody({todos}) {
  const arrTodos = todos.map(todo=>{
    return <Todo key={todo.id} title={todo.title} date={todo.date}/>
  })
  return (
    <ul className="mt-5">
      {arrTodos}
    </ul>
  );
}

export default TodosBody;
