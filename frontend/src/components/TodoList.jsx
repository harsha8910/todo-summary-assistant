// src/components/TodoList.jsx
import React, { useEffect, useState } from 'react';
import api from '../api';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import Summary from './Summary';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await api.get('/todos');
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodo setTodos={setTodos} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
      <Summary todos={todos}/>
    </div>
  );
};

export default TodoList;
