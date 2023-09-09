import { useState, useEffect } from "react";
import axios from "./utils/axiosInstance";
import Sidebar from "./sidebar";
import MainContent from "./mainContent";
function App() {
  const [todos, setTodos] = useState([]);
  const retrieveData = async () => {
    const res = await axios.get("/Todos");
    return res.data;
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
      <MainContent todos={todos} />
    </div>
  );
}

export default App;
