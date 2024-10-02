/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

function Create({ setTasks }) {
  const [task, setTask] = useState(""); // State to hold the new task input

  const handleAdd = async () => {
    if (!task.trim()) return; // Prevent adding empty tasks

    try {
      const result = await axios.post('http://localhost:3000/add', { task }); // Send task to server
      setTasks(prevTasks => [...prevTasks, result.data]); // Update tasks state with new task
      setTask(""); // Clear input field
    } catch (err) {
      console.error(err); // Log any errors
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd(); // Add task when Enter is pressed
    }
  };

  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Add a New Task, press Enter or 'add'"

        value={task}
        onChange={(e) => setTask(e.target.value)} // Update task state on input change
        onKeyPress={handleKeyPress} // Handle key press for adding task
      />
      <button type="button" onClick={handleAdd}>Add</button> {/* Button to add task */}
    </div>
  );
}

export default Create;