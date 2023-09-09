/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
function Todo({ title, date }) {
  return (
    <li className="mt-5 flex items-center text-2xl space-x-8 mx-5">
      <div className="space-x-4">
        <button className="space-x-2">
          {" "}
          <FontAwesomeIcon icon={faEdit} className="text-gray-500" />
        </button>
        <button className="space-x-2">
          {" "}
          <FontAwesomeIcon icon={faTrashAlt} className="text-gray-500" />
        </button>
        <button className="space-x-2">
          {" "}
          <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500" />
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
