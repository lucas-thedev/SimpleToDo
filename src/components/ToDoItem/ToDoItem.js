import React from 'react'
import './ToDoItem.css'

class ToDoItem extends React.Component () {
    render (){
        <ToDoElement />
    }
}

function ToDoElement() {
    return (
        <div className='todo-item-container'>
                <label className='b-contain'>
	            <input type='checkbox' />
	            <div className='b-input'></div>
                </label>
                <div className='item'></div>
            </div> 
    )
}

export default ToDoItem;