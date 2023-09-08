function Filter() {
    return ( 
        <div className="space-x-2 lg:space-x-10">
            <button className="py-2 px-4 border border-blue-500 rounded">All</button>
            <button className="py-2 px-4 border border-blue-500 rounded">Completed</button>
            <button className="py-2 px-4 border border-blue-500 rounded">Active</button>
        </div>
     );
}

export default Filter;