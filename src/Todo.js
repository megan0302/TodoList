import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';

class Todo extends Component {

    render() {
        return this.props.itemList.map((a, id)=> 
        
            <TodoItem 
                key={id}
                todoItem={a}
                handleDelete={this.props.handleDelete} 
                handleComplete={this.props.handleComplete} 
            />)
    }
}
export default Todo;