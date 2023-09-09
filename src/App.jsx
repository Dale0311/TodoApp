import { useState, useEffect } from "react";
import axios from "./utils/axiosInstance";
import Sidebar from "./sidebar";
import MainContent from "./mainContent";
import date from "./utils/date";
function App() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const retrieveData = async () => {
    const res = await axios.get("/Todos");
    return res.data;
  };
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
  // intial fetch
  useEffect(() => {
    let ignore = false;
    const fetchTodos = async () => {
      const data = await retrieveData();
      if (!ignore) {
        setTodos(data);
      }
    };
    fetchTodos();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div className="flex flex-col lg:grid lg:flex-none lg:grid-cols-4 container mx-auto h-screen">
      <Sidebar />
      <MainContent
        todos={todos}
        showModal={showModal}
        handleAdd={handleAdd}
        setShowModal={setShowModal}
      />
    </div>
  );
}

// added a modal
// add a function that handlesTheAdd
export default App;
