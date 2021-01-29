import './ToDoItem.css'

function ToDoItem (props) {
    return (
        <div className='todo-item-container'>
            <label className='b-contain'>
	        <input type='checkbox' />
	        <div className='b-input'></div>
            </label>
            <div className='item'>{props.item}</div>
        </div> 
    );
}

export default ToDoItem;