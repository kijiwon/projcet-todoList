import React from "react"
import TodoItem from "./TodoItem"
import "./todoList.css";
import TodoEdit from "./TodoEdit";

function TodoBoard({todoList,removeItem,isChecked, btnEdit}){
    // 입력된 날짜로 나눠보기
    // 과연 될까..?
    // const today = new Date().toLocaleDateString();
    // const todayList = todoList.filter(todo=>{
    //     return todo.createdAt === today;
    // })
    
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
                btnEdit = {btnEdit}
            />)}
            </div>
        </div>
    )
}

export default TodoBoard