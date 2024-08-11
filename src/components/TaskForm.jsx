import React, { useState, useEffect } from 'react';

function TaskForm({ onSave, task }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [reminder, setReminder] = useState(5);


  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
      setReminder(task.reminder || 5);
    }
  }, [task]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: task ? task.id : new Date().getTime(), 
      title,
      description,
      dueDate,
      reminder,
    };
    console.log('Saving task:', newTask);
    onSave(newTask); 
    setTitle('');
    setDescription('');
    setDueDate('');
    setReminder(5);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <input
        type="number"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
        min="1"
        max="60"
        required
      />
      <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
