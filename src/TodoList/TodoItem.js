import React, { useState } from "react";
import "./todoList.css";
import { BsCheckSquare,BsSquare,BsSquareFill,BsSquareHalf ,BsTrashFill} from 'react-icons/bs';
// import {BiEditAlt} from 'react-icons/bi'

function TodoItem({item,removeItem,isChecked}){
    // const {id, text, checked} = {item}

    return (
        <li className="todoItem" key={item.id}>
            {/* checked=true일 때 checked라는 class를 추가  */}
            <div className={`todoState ('checkbox', { checked })`}>
                {/* checked=true면 체크된 박스 아이콘이 false면 빈 박스 아이콘이 뜸 */}
                {item.checked ? <BsCheckSquare/> : <BsSquare/>}
            </div>
            <div className="todo_item">
            {item.text}
            </div>
            <button onClick={()=>isChecked(item.id)}>완료</button>
            <div>
                <BsTrashFill  onClick={()=>removeItem(item.id)}/>
            </div>
        </li>
    )
}

export default TodoItem;