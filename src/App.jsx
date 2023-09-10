import { useState, useEffect } from "react";
import axios from "./utils/axiosInstance";
import Sidebar from "./sidebar";
import MainContent from "./mainContent";
import date from "./utils/date";
function App() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

 
  // intial fetch
  useEffect(() => {
    let ignore = false;
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/Todos");
        if (!ignore) {
          setTodos(res.data);
          setIsLoading(false);
        }
      } catch (e) {
        alert("Error: " + e);
        setIsLoading(false);
      }
    };
    fetchTodos();
    return () => {
      ignore = true;
    };
  }, []);
  const handleAdd = async (title) => {
    const nextId = todos.length;
    const newTodo = { id: nextId, title: title, date: date() };
    try {
      const res = await axios.post("/Todos", newTodo);
      setTodos((oldTodos) => [...oldTodos, res.data]);
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="flex flex-col lg:grid lg:flex-none lg:grid-cols-4 container mx-auto h-screen">
      <Sidebar />
      <MainContent
        todos={todos}
        showModal={showModal}
        handleAdd={handleAdd}
        setShowModal={setShowModal}
        isLoading={isLoading}
      />
    </div>
  );
}

// added a modal, done
// added a handleAdd, done

// handle conditional render for todos, done
// handle loading, has todos and no todos ui, done
// add a complete key for api, ongoing
// create a logic that shows the check as solid if todo.complete is true,
export default App;
