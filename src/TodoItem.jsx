import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  // Hàm format hiển thị cả Giờ và Ngày
  const formatDateTime = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    
    return date.toLocaleString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => toggleTodo(todo.id)}
    >
      <div className="todo-content">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          readOnly 
        />
        
        <div className="todo-info">
          <span className="todo-text">{todo.text}</span>
          {/* Hiển thị thời gian nếu có */}
          {todo.deadline && (
            <span className="todo-deadline">
              ⏰ {formatDateTime(todo.deadline)}
            </span>
          )}
        </div>
      </div>
      
      <button 
        className="btn-delete"
        onClick={(e) => {
          e.stopPropagation(); 
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;