import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
function NoTodos() {
  return (
    <div className="bg-gray-300/70 text-gray-600 text-lg flex flex-col space-y-4 w-60 h-60 p-4 items-center justify-center rounded">
      <h1 className="font-semibold text-2xl">No existing todos</h1>
      <FontAwesomeIcon icon={faSquarePlus} className="text-gray-500 text-5xl" />
    </div>
  );
}

export default NoTodos;
