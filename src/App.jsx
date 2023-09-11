import { useState, useEffect } from "react";
import axios from "./utils/axiosInstance";
import Sidebar from "./sidebar";
import MainContent from "./mainContent";
import date from "./utils/date";
import filteredTodos from "./utils/filterTodos";

function App() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState("default");

  // filteredData
  const filteredData = filteredTodos(todos, filterType);

  // add todo
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
  // toggle complete todo
  const handleCompleteTodo = async (id, completed) => {
    try {
      const updateTodo = todos.find((todo) => todo.id === id);
      const res = await axios.put(`/Todos/${id}`, {
        ...updateTodo,
        completed: !completed,
      });
      setTodos((todos) => {
        return todos.map((todo) => {
          return todo.id === id ? res.data : todo;
        });
      });
    } catch (e) {
      alert("error: " + e.message);
    }
  };

  // delete todo
  const handleDeleteTodo = async (id) => {
    try {
      axios.delete(`/Todos/${id}`);
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    } catch (error) {
      alert("error: " + error.message);
    }
  };

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

  return (
    <div className="flex flex-col lg:grid lg:flex-none lg:grid-cols-4 container mx-auto h-screen">
      <Sidebar />
      <MainContent
        todos={filteredData}
        showModal={showModal}
        handleAdd={handleAdd}
        setShowModal={setShowModal}
        isLoading={isLoading}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        setFilterType={setFilterType}
        filterType={filterType}
      />
    </div>
  );
}

// added a modal, done
// added a handleAdd, done

// handle conditional render for todos, done
// handle loading, has todos and no todos ui, done
// add a complete key for api, ongoing, done
// create a logic that shows the check as solid if todo.complete is true, done
// handleClick for completed todo btn, done,
// handleClick for delete todo, done
// make the filter works, done
// make the filter btns, active or not, done
// make sidebar status component work, ongoing

// bugs:
// 1. addnewtask: add todo can be press without user input
// 2. filter
// - if we have two todos(1 active 1 complete) and press active and decided to delete the todo
//  it will show no todos but we have other todo

// done fixing bug #1, 2
export default App;
