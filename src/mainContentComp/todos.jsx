import TodosHeader from "./todosHeader";
import TodosBody from "./todosBody";
function Todos() {
  return (
    <div className="flex flex-col p-4 space-y-5">
      <TodosHeader />
      <TodosBody />
      <div className="text-right">
        <button className="py-4 px-8 bg-blue-400 text-white hover:bg-blue-500 rounded font-semibold">Add new task</button>
      </div>
    </div>
  );
}

export default Todos;
