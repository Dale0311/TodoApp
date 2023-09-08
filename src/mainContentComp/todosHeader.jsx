import Filter from "./filter"
function TodosHeader() {
    return ( 
        <div className="flex justify-between items-center mx-5">
            <h1 className="text-lg md:text-4xl font-semibold ">Todos</h1>
            <Filter />
        </div>
     );
}

export default TodosHeader;