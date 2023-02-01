import React from "react";
import "./todoList.css";
import { BsCheckSquare,BsSquare,BsSquareFill,BsSquareHalf ,BsTrashFill} from 'react-icons/bs';
// import {BiEditAlt} from 'react-icons/bi'
import {MdDoneOutline} from 'react-icons/md'
function TodoItem({item,removeItem,isChecked}){
    // const {id, text, checked} = {item}
    // const parsedDate = new Date(item.createdAt).toLocaleDateString('ko-kr');

    return (
        <div className="todoItem" key={item.id}>
            {/* checked=true일 때 checked라는 class를 추가  */}
            <div className={`todoState ('checkbox', { checked })`}>
                {/* checked=true면 체크된 박스 아이콘이 false면 빈 박스 아이콘이 뜸 */}
                {item.checked ? <BsCheckSquare/> : <BsSquare/>}
            </div>
            {/* checked상태일시 className추가 */}
            <div className={`todo-item ${item.checked ? "checkedItem" : ""}`}>
                {item.text}
            </div>
            <MdDoneOutline className="btn-check" onClick={()=>isChecked(item.id)}/>
            <BsTrashFill  className="btn-remove" onClick={()=>removeItem(item.id)}/>
        </div>
    )
}

export default TodoItem;