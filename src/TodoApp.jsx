import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

const TodoApp = () => {
  // 1. Initialize State with some dummy data
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete Lab 3 Exercises', completed: true },
    { id: 2, text: 'Learn React Hooks', completed: false },
    { id: 3, text: 'Build a Capstone Project', completed: false },
  ]);

  // 2. Add Function: Creates a new object with a timestamp ID
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // 3. Toggle Function: Flips the 'completed' status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // 4. Delete Function: Filters out the item with the matching ID
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app-wrapper">
      <h1 className="app-title">My To-Do List</h1>
      
      <div className="todo-container">
        <TodoForm addTodo={addTodo} />
        <hr className="divider" />
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      </div>
      
      <p className="footer-text">
        Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}
      </p>
    </div>
  );
};

export default TodoApp;