import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200">
      <div>
      <h1 className=" text-3xl font-bold ">Minimal Todo List</h1>
      </div>
      <div>
      

        <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded' onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="divide-y divide-gray-100">
        {todos.map((todo, index) => (
          <li className="flex items-stretch gap-x-6 py-5 flex-row" key={index}>
            <p className='text-sm font-semibold leading-6 text-gray-900 py-1'>{todo}{' '}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ' onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
