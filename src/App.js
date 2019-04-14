import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      itemAdded:'',
      itemList:['Go Shopping', 'Eat Dinner', 'Say Hello'],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({itemAdded: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      itemAdded: '',
      itemList: [...this.state.itemList, this.state.itemAdded]
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Things To Do:<br/>
            <input type="text" value={this.state.itemAdded} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Add" />
          </form>
          <TodoList itemList={this.state.itemList} />
      </div>
    );
  }
}

export default App;
