import './ToDoItem.css'

function ToDoItem (props) {
    return (
        <div>
            <input className="checkbox" type='checkbox' />
            <span>{props.item}</span>
        </div>
    );
}

export default ToDoItem;