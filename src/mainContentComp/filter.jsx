/* eslint-disable react/prop-types */
function Filter({ setFilterType }) {
  return (
    <div className="space-x-2 lg:space-x-10">
      <button
        className="py-2 px-4 border border-blue-500 rounded"
        onClick={() => {
          setFilterType("default");
        }}
      >
        All
      </button>
      <button
        className="py-2 px-4 border border-blue-500 rounded"
        onClick={() => {
          setFilterType("completed");
        }}
      >
        Completed
      </button>
      <button
        className="py-2 px-4 border border-blue-500 rounded"
        onClick={() => {
          setFilterType("active");
        }}
      >
        Active
      </button>
      <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
        <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
        <span className="relative">Button Text</span>
      </button>
    </div>
  );
}

export default Filter;
