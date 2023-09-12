/* eslint-disable react/prop-types */
import TodosHeader from "./todosHeader";
import TodosBody from "./todosBody";
import Modal from "../modal";
function Todos(props) {
  return (
    <div className="flex flex-col p-4 space-y-5">
      <TodosHeader
        setFilterType={props.setFilterType}
        filterType={props.filterType}
      />
      <TodosBody {...props} />
      <div className="text-right">
        <button
          className="w-full py-2 px-4 md:py-4 md:px-8 md:w-auto bg-blue-400 text-white hover:bg-blue-500 rounded font-semibold"
          onClick={() => {
            props.setShowModal(true);
          }}
        >
          Add new task
        </button>
      </div>
      {props.showModal && (
        <Modal handleAdd={props.handleAdd} setShowModal={props.setShowModal} />
      )}
    </div>
  );
}

export default Todos;
