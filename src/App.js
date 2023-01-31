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
  // 아이텀 추가 버튼 동작
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
  // 입력된 값 가져오기
  const itemValue = (envnt) =>{
    setInputValue(envnt.target.value)
  }
  // 삭제버튼 동작 -> 해당 id를 가진 요소를 제외하고 나머지 요소들로만 구성된 새로운 배열
  const removeItem = id =>{
    setTodoList(todoList => todoList.filter(item=>item.id!==id))
  }
  // 체크박스 동작
  // 스프레드 연산자로 item이 가지고 있는 모든 속성을 가져오기
  // checked의 값을 반대로 바꿔줌
  // else인경우는 그냥 반환
  const isChecked = id => {
    setTodoList(todoList=> todoList.map(item=> item.id === id?  { ...item, checked: !item.checked } : item))
  }

  
  return (
    <div className="App">
      <div>
        <h1>오늘의 할 일</h1>
      </div>
      <input type="text" value={inputValue} onChange={itemValue}/>
      <button type='submit' onClick={addItem}>등록하기</button>
      <TodoBoard 
        todoList={todoList}
        removeItem = {removeItem}  
        isChecked = {isChecked}
      />
    </div>
  );
}

export default App;
