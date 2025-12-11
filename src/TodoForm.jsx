import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Do not add empty tasks
    
    addTodo(text);
    setText(''); // Clear input field after adding
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="btn-add">Add Task</button>
    </form>
  );
};

export default TodoForm;