import React, { useState } from "react";
import "./Q5.css";

function Q5() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    // Using spread operator for immutability
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>

      <footer>
        <p>Name: G Yeshwanth Surya</p>
        <p>Registration Number: 24BCT0041</p>
      </footer>
    </div>
  );
}

export default Q5;