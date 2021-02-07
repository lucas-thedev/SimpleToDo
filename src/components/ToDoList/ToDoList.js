import './ToDoList.css'
import ToDoItem from '../ToDoItem/ToDoItem'
import InputTask from '../InputTask/InputTask'
import AddButton from '../AddButton/AddButton'
import React from 'react'

class ToDoList extends React.Component {

    state = {
        items: [],
        currentText: ''
    }

    itemId = 0

    handleChange = (changeType, value) => {
        if (changeType === 'checkbox') {
            let items = this.toggleCheckbox(value)
            let currentText = this.state.currentText
            this.setState({items, currentText})
        } else {
            let currentText = value
            let items = this.state.items
            this.setState({items, currentText})
        }
    }


    handleSubmit = () => {
        if(this.verifySubmit()) {
            let newItem = {
                id: this.itemId,
                name: this.state.currentText,
                selected: false
            }
    
            let items = [...this.state.items]
            items.push(newItem)
            
            let currentText = ''
            this.itemId++
    
            this.setState({items, currentText})
        }
    }

    toDoItemsMapper() {
        return this.state.items.map(item =>
            <ToDoItem 
                key={item.id}
                item={item} 
                handleChange={this.handleChange}
            />
        )
    }

    verifySubmit () {
        return this.state.currentText !== ''
    }

    toggleCheckbox (id) {
        let items = [...this.state.items]
        let changedItem = {...items[id]}
        changedItem.selected = !changedItem.selected
        items[id] = changedItem
        return items
    }

    render () {

        const toDoItems = this.toDoItemsMapper();

        return (
            <div className='list-container'>
                <div className='form-container'>
                    <InputTask 
                        handleChange={this.handleChange} 
                        value={this.state.currentText}
                    />
                    <AddButton 
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                {toDoItems}
            </div>
        )
    }

}

export default ToDoList