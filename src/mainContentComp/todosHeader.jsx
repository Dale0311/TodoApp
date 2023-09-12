/* eslint-disable react/prop-types */
import Filter from "./filter";
function TodosHeader(props) {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center mx-5">
      <h1 className="text-2xl md:text-4xl font-semibold mt-8 md:mt-0">Todos</h1>
      <Filter {...props} />
    </div>
  );
}

export default TodosHeader;
