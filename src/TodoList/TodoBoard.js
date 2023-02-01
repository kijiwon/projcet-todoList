import React from "react"
import TodoItem from "./TodoItem"
import "./todoList.css";

function TodoBoard({todoList,removeItem,isChecked}){
    
    return (
        <div className="todoList">
            <div className="todoBoard">
                <div className="itemDate">{new Date().toLocaleDateString()}</div>
                <div className="totalItem">{`total : ${todoList.length}`}</div>
            </div>
            <div className="todoItemCompo">
                {todoList.map((item)=> <TodoItem 
                item={item} 
                key={item.id} 
                removeItem={removeItem}
                isChecked = {isChecked}
            />)}
            </div>
        </div>
    )
}

export default TodoBoard