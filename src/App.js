import React from 'react';
import './App.css';
import { useState } from 'react';
import TodoBoard from './TodoList/TodoBoard';

function App() {
  const [inputValue,setInputValue] = useState('');
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={((event)=>setInputValue(event.target.value))}/>
      <button>등록하기</button>
      <TodoBoard/>
    </div>
  );
}

export default App;
