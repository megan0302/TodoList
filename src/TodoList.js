import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {

    render() {
        const listItems = this.props.itemList.map((a) => <li>{a}</li>);

        return (
        <ul>
            {listItems}
        </ul>
        );
    }
}

export default TodoList;