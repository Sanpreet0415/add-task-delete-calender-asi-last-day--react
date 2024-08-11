
import React from 'react';
import Calendar from 'react-calendar';

function CalendarView({ tasks }) {
  return (
    <div>
      <Calendar
        tileContent={({ date }) => {
          const taskDue = tasks.find(task => new Date(task.dueDate).toDateString() === date.toDateString());
          return taskDue ? <div>{taskDue.title}</div> : null;
        }}
      />
    </div>
  );
}

export default CalendarView; 
