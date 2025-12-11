import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  // Display a message if the list is empty
  if (todos.length === 0) {
    return <p className="empty-msg">No tasks yet. Add one above!</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </div>
  );
};

export default TodoList;