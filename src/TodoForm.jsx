import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; 
    
    addTodo(text, deadline);
    
    setText('');
    setDeadline(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="todo-input"
        />
        {/* CHANGED: datetime-local để chọn cả ngày và giờ */}
        <input 
          type="datetime-local" 
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="date-input"
        />
      </div>
      <button type="submit" className="btn-add">Add</button>
    </form>
  );
};

export default TodoForm;