import React from "react"
import TodoItem from "./TodoItem"

function TodoBoard({todoList,removeItem,isChecked}){
    
    return (
        <div>
            <h4>오늘은 ...</h4>
            {`total : ${todoList.length}`}
            {todoList.map((item)=> <TodoItem 
                item={item} 
                key={item.id} 
                removeItem={removeItem}
                isChecked = {isChecked}
            />)}
        </div>
    )
}

export default TodoBoard