// src/components/AddTodo.jsx
import React, { useState } from 'react';
import api from '../api';

const AddTodo = ({ setTodos }) => {
  const [title, setTitle] = useState('');

  const handleAdd = async () => {
    if (!title.trim()) return;

    await api.post('/todos', { title });
    const res = await api.get('/todos');
    setTodos(res.data);
    setTitle('');
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="Enter a todo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
