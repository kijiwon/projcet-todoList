import React from "react"
import TodoItem from "./TodoItem"

function TodoBoard(props){
    
    return (
        <div>
            <h4>오늘은 ...</h4>
            {`total : ${props.todoList.length}`}
            {props.todoList.map((item)=> <TodoItem item={item}/>)}
        </div>
    )
}

export default TodoBoard