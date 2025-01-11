import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const addTask = () => {
    if (task.trim() === '') {
      setError('Task cannot be empty.');
      return;
    }
    setTasks([...tasks, task]);
    setTask('');
    setError('');
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {error && <p className="error">{error}</p>}
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className="task-item">
            {t}
            <button onClick={() => removeTask(index)} className="remove-btn">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;