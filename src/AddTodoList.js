import React, { Component } from 'react';
import './App.css';

class AddTodoList extends Component {
    
    constructor() {
        super();
        this.state = {
          itemAdded:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({itemAdded: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.handleAdd(this.state.itemAdded);
        this.setState({itemAdded: ''});
    }
    
    render() {
        return (
          <div>
            Things To Do:
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.itemAdded} onChange={this.handleChange} placeholder="Add Todo"/>
              <input type="submit" value="Add" />
            </form>
          </div>
        );
    }
}

export default AddTodoList;