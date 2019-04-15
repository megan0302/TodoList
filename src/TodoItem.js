import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {

    handleDelete(item_id){
        this.props.handleDelete(item_id);
    }

    handleComplete(item_id){
        this.props.handleComplete(item_id);
    }

    render() {
        const{id, itemName, isCompleted} = this.props.todoItem;

        return (
            <li className={(isCompleted ? 'setLineThroughTextDeco' : 'setNormalTextDeco')}>
                <input name="isCompleted" type="checkbox" onChange={this.handleComplete.bind(this, id)} checked={isCompleted}/>
                {itemName}
                <button onClick={this.handleDelete.bind(this, id)}>Delete</button>
            </li>
            
        )
    }
}

export default TodoItem;