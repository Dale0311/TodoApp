/* eslint-disable react/prop-types */
import Filter from "./filter";
function TodosHeader(props) {
  return (
    <div className="flex justify-between items-center mx-5">
      <h1 className="text-lg md:text-4xl font-semibold ">Todos</h1>
      <Filter {...props} />
    </div>
  );
}

export default TodosHeader;
