import './ToDoList.css'
import ToDoItem from '../ToDoItem/ToDoItem'

function ToDoList () {
    let items = [
        {checked: true, name:'item 1'},
        {checked: false, name:'item 2'},
        {checked: false, name:'item 3'}
    ]
    
    const toDoItems = toDoItemsMapper(items);

    return (
        <div>
            {toDoItems}
        </div>
    );
}

function toDoItemsMapper(items) {
    return items.map (item =>
        <ToDoItem 
            checked={item.checked} 
            item={item.name} 
        />
    )
}

export default ToDoList