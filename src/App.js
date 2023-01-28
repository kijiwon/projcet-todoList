import React from 'react';
import './App.css';
import { useState } from 'react';
import TodoBoard from './TodoList/TodoBoard';

function App() {
  const [inputValue,setInputValue] = useState('');
  const [todoList,setTodoList] = useState([]);
  const addItem= () =>{
    setTodoList([inputValue,...todoList])
  }
  
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={((event)=>setInputValue(event.target.value))}/>
      <button onClick={addItem}>등록하기</button>
      <TodoBoard todoList={todoList}/>
    </div>
  );
}

export default App;
