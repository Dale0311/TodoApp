function Status() {
    return ( 
        <div className="flex gap text-lg text-center font-semibold">
            <div className="flex-1 ">
                <p>1</p>
                <p className="font-normal">Active</p> 
            </div>
            <div className="flex-1 text-center">
                <p>0</p>
                <p className="font-normal">Completed</p> 
            </div>
            <div className="flex-1 text-center">
                <p>0</p>
                <p className="font-normal">trash</p> 
            </div>
        </div>
     );
}

export default Status;