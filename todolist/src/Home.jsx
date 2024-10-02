import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill } from "react-icons/bs";

function Home() {
  const [todos, setTodos] = useState([]); // State to hold todo items

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const result = await axios.get("http://localhost:3000/get"); // Fetch todos from the server
        setTodos(result.data); // Update state with fetched todos
      } catch (err) {
        console.error(err); // Log any errors
      }
    };
    fetchTodos();
  }, []);

  const handleEdit = async (id) => {
    try {
      await axios.put(`http://localhost:3000/update/${id}`); // Update the todo's status
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? { ...todo, done: !todo.done } : todo // Toggle 'done' status
        )
      );
    } catch (err) {
      console.error(err); // Log any errors
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`); // Delete the todo
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id)); // Update state to remove deleted todo
    } catch (err) {
      console.error(err); // Log any errors
    }
  };

  return (
    <div className="home">
      <h2 className="logo">Todo List</h2>
      <Create setTasks={setTodos} /> {/* Component to create new todos */}
      <br />
      {todos.length === 0 ? (
        <div>
          <h2>Do you have tasks today?</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsFillCheckCircleFill /> // Checked icon for completed tasks
              ) : (
                <BsCircleFill className="icon" /> // Empty circle for pending tasks
              )}
              <p className={todo.done ? "completed" : ""}>{todo.task}</p>
            </div>
            <span onClick={() => handleDelete(todo._id)}>
              <BsFillTrashFill className="icon" /> {/* Trash icon for deleting tasks */}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;