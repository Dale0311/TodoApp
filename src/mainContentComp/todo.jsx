/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle as solidCheck } from "@fortawesome/free-solid-svg-icons";
function Todo({
  id,
  title,
  date,
  completed,
  handleCompleteTodo,
  handleDeleteTodo,
}) {
  return (
    <li className="mt-5 flex items-center text-2xl space-x-8 mx-5">
      <div className="space-x-4">
        <button className="space-x-2" onClick={() => handleDeleteTodo(id)}>
          {" "}
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="text-gray-500 hover:text-red-500"
          />
        </button>
        <button className="space-x-2">
          {" "}
          {completed ? (
            <FontAwesomeIcon
              icon={solidCheck}
              className="text-green-500"
              onClick={() => handleCompleteTodo(id, completed)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-gray-500 hover:text-green-500"
              onClick={() => handleCompleteTodo(id, completed)}
            />
          )}
        </button>
      </div>
      <div className="text-xl ">
        <p className="font-semibold">{title}</p>
        <p className="text-xs">{date}</p>
      </div>
    </li>
  );
}

export default Todo;
