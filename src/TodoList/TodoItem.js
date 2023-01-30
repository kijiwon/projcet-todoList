import React, { useState } from "react";
import "./todoList.css";
import { BsCheckSquare,BsSquare,BsSquareFill,BsSquareHalf } from 'react-icons/bs';

function TodoItem(props){
    const {checked} = props.item.checked;
    const [checkedItem,setCheckedItem] = useState(props.item.chacked)
    const changeState = ()=>{
        setCheckedItem(!checkedItem)
    }
    console.log(props.item)

    return (
        <div className="todoItem">
            <div className={`todoState ${checked ? checked : ''}`}>
                {checked ? <BsSquareFill/> : <BsSquare/>}
            </div>
            <div>
            {props.item.text}
            </div>
            <button onClick={changeState}>완료</button>
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;