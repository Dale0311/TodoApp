/* eslint-disable react/prop-types */
function Filter({ setFilterType, filterType }) {
  return (
    <div className="space-x-2 lg:space-x-10 flex">
      {/* default btn */}
      <button
        className={`relative inline-flex items-center px-4 md:px-6 py-1 overflow-hidden md:text-lg font-medium ${
          filterType === "default"
            ? "bg-indigo-600 text-white"
            : " text-indigo-600 hover:text-white hover:bg-gray-50"
        } border-2 border-indigo-600 rounded group `}
        onClick={() => {
          setFilterType("default");
        }}
      >
        {filterType !== "default" && (
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        )}
        <span className="relative">All</span>
      </button>
      {/* completed btn */}
      <button
        className={`relative inline-flex items-center px-4 md:px-6  py-1 overflow-hidden text-lg font-medium ${
          filterType === "completed"
            ? "bg-indigo-600 text-white"
            : " text-indigo-600 hover:text-white hover:bg-gray-50"
        } border-2 border-indigo-600 rounded group `}
        onClick={() => {
          setFilterType("completed");
        }}
      >
        {filterType !== "completed" && (
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        )}
        <span className="relative">Completed</span>
      </button>
      <button
        className={`relative inline-flex items-center px-4 md:px-6  py-1 overflow-hidden text-lg font-medium ${
          filterType === "active"
            ? "bg-indigo-600 text-white"
            : " text-indigo-600 hover:text-white hover:bg-gray-50"
        } border-2 border-indigo-600 rounded group `}
        onClick={() => {
          setFilterType("active");
        }}
      >
        {filterType !== "active" && (
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        )}
        <span className="relative">Active</span>
      </button>
    </div>
  );
}

export default Filter;
