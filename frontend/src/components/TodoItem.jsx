// // src/components/TodoItem.jsx
// import React, { useState } from 'react';
// import api from '../api';

// const TodoItem = ({ todo, setTodos }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(todo.title);

//   const handleDelete = async () => {
//     await api.delete(`/todos/${todo.id}`);
//     const res = await api.get('/todos');
//     setTodos(res.data);
//   };

//   const handleEdit = async () => {
//     if (!editedTitle.trim()) return;

//     await api.put(`/todos/${todo.id}`, { title: editedTitle });
//     const res = await api.get('/todos');
//     setTodos(res.data);
//     setIsEditing(false);
//   };

//   return (
//     <li>
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={editedTitle}
//             onChange={(e) => setEditedTitle(e.target.value)}
//           />
//           <button onClick={handleEdit}>Save</button>
//         </>
//       ) : (
//         <>
//           <span>{todo.title}</span>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//         </>
//       )}
//       <button onClick={handleDelete}>Delete</button>
//     </li>
//   );
// };

// export default TodoItem;


// src/components/TodoItem.jsx
import React, { useState } from 'react';
import api from '../api';

const TodoItem = ({ todo, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleDelete = async () => {
    await api.delete(`/todos/${todo.id}`);
    const res = await api.get('/todos');
    setTodos(res.data);
  };

  const handleEdit = async () => {
    if (!editedTitle.trim()) return;

    await api.put(`/todos/${todo.id}`, { title: editedTitle });
    const res = await api.get('/todos');
    setTodos(res.data);
    setIsEditing(false);
  };

  const handleCheckboxToggle = async () => {
    await api.put(`/todos/${todo.id}`, { completed: !todo.completed });
    const res = await api.get('/todos');
    setTodos(res.data);
  };

  return (
    <li>
      <input
      type="checkbox"
      checked={todo.completed}
      onChange={handleCheckboxToggle}
      />
      {isEditing ? (
        <>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <button onClick={handleEdit}>Save</button>
        </>
        ) : (
          <>
          {/* <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> */}
          <span style={{ textDecoration: todo.completed ? 'none' : 'none' }}>
            {todo.title}
          </span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
            )}
            <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
