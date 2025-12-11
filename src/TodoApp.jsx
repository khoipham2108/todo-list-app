import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { 
      id: 1, 
      text: 'Go jogging in the neighborhood', 
      deadline: '2025-12-11T07:00', 
      completed: true 
    },
    { 
      id: 2, 
      text: 'Have breakfast and buy coldbrew', 
      deadline: '', 
      completed: true 
    },
    { 
      id: 3, 
      text: 'Group Meeting for the Capstone Project (Online)', 
      deadline: '2025-12-11T09:30', 
      completed: false 
    },
    { 
      id: 4, 
      text: 'Do the weekly grocery shopping', 
      deadline: '',
      completed: false 
    },
    { 
      id: 5, 
      text: 'Review for the Web Development exam (Chapters 3–4)', 
      deadline: '2025-12-11T14:00', 
      completed: false 
    },
    { 
      id: 6, 
      text: 'Go out to play soccer', 
      deadline: '2025-12-11T19:00', 
      completed: false 
    },
    { 
      id: 7, 
      text: 'Submit Lab 3 Web Report (Moodle)', 
      deadline: '2025-12-11T23:59', 
      completed: false 
    },
  ]);


  const addTodo = (text, deadline) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      deadline: deadline, 
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

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
        Tasks: {todos.length} | Done: {todos.filter(t => t.completed).length}
      </p>
    </div>
  );
};

export default TodoApp;