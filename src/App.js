import React from 'react';
import './App.css';
import { useState } from 'react';
import TodoBoard from './TodoList/TodoBoard';


function App() {
  const [inputValue,setInputValue] = useState('');
  const [todoList,setTodoList] = useState([
    {
      id : 1,
      text : '밥먹기',
      checked : false
    },
    {
      id : 2,
      text : '자기',
      checked : true
    }
  ]);
  const addItem= () =>{
    if(inputValue.length===0){
      alert('내용을 입력해주세요')
    } else{
      const todo = {
        id : todoList.length,
        text : inputValue,
        checked : false
      }
      setTodoList([todo,...todoList])
      setInputValue('')

    }
  }
  console.dir(todoList)
  const itemValue = (envnt) =>{
    setInputValue(envnt.target.value)
  }
  
  return (
    <div className="App">
      <div>
        <h1>오늘의 할 일</h1>
      </div>
      <input type="text" value={inputValue} onChange={itemValue}/>
      <button type='submit' onClick={addItem}>등록하기</button>
      <TodoBoard todoList={todoList}/>
    </div>
  );
}

export default App;
