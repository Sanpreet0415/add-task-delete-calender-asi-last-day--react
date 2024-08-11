import React from 'react';

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {new Date(task.dueDate).toLocaleString()}</p>
          <p>Reminder: {task.reminder} minutes before</p>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
