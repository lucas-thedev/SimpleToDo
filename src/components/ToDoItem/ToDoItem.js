import './ToDoItem.css'

function ToDoItem (props) {
    return (
        <div className='todo-item-container'>
            <label className='b-contain'>
                <input 
                    type='checkbox' 
                    checked={props.item.selected} 
                    onChange={() => props.handleChange('checkbox', props.item.id)}
                />
                <div className='b-input'></div>
            </label>
            <div className={props.item.selected ? 'item-selected' : 'item'}>{props.item.name}</div>
        </div>
    )
}

export default ToDoItem