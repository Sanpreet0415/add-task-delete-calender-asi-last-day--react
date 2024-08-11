// src/components/Notification.js
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification({ tasks }) {
  useEffect(() => {
    const now = new Date();
    tasks.forEach(task => {
      const dueDate = new Date(task.dueDate);
      const reminderTime = dueDate.getTime() - task.reminder * 60 * 1000;
      if (now.getTime() >= reminderTime && now.getTime() <= dueDate.getTime()) {
        toast.info(`Reminder: ${task.title} is due soon!`);
      }
    });
  }, [tasks]);

  return <ToastContainer />;
}

export default Notification;
