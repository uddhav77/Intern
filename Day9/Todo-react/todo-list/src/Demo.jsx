// import React, { useState } from 'react';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const handleInputChange = (event) => {
//     setNewTodo(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (newTodo.trim() !== '') {
//       setTodos([...todos, newTodo]);
//       setNewTodo('');
//     }
//   };

//   const handleTodoDelete = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <form onSubmit={handleFormSubmit}>
//         <input type="text" value={newTodo} onChange={handleInputChange} />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleTodoDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
