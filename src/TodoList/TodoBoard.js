import React from "react"
import TodoItem from "./TodoItem"

function TodoBoard(props){
    
    return (
        <div>
            <h4>To-Do board</h4>
            {props.todoList.map((item)=> <TodoItem item={item}/>)}
        </div>
    )
}

export default TodoBoard