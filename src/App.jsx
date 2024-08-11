// src/App.jsx
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (task) => {
    if (currentTask) {
      setTasks(tasks.map(t => t.id === currentTask.id ? task : t));
      setCurrentTask(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h1>TaskMaster Calendar</h1>
      <TaskForm onSave={addTask} task={currentTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
