import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => toggleTodo(todo.id)}
    >
      <div className="todo-content">
        {/* Checkbox is readOnly because the click event is handled by the parent div */}
        <input 
          type="checkbox" 
          checked={todo.completed} 
          readOnly 
        />
        <span className="todo-text">{todo.text}</span>
      </div>
      
      <button 
        className="btn-delete"
        onClick={(e) => {
          e.stopPropagation(); // Prevent toggling the task when clicking delete
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;