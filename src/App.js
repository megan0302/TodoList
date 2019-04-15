import React, { Component } from 'react';
import './App.css';
import AddTodoList from './AddTodoList';
import Todo from './Todo';

class App extends Component {

  constructor() {
    super();
    this.state = {
      itemList:[
        { 
          id: 1,
          itemName: 'Go Shopping',
          isCompleted: true
        },
        {
          id: 2,
          itemName: 'Eat Dinner',
          isCompleted: false
        },
        {
          id: 3,
          itemName: 'Say Hello',
          isCompleted: false
        }],
        incre_id: 3,
    };
    
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleAdd(add_item)
  {
    const new_id = this.state.incre_id + 1;
    this.setState({
      itemList: [...this.state.itemList, {id:new_id, itemName:add_item, isCompleted:false}],
      incre_id: new_id
    });
  }

  handleDelete(item_id){
    this.setState({
      itemList:this.state.itemList.filter((a) => (a.id)!== item_id)
    });
  }

  handleComplete(item_id){
    this.setState({
      todos: this.state.itemList.map(todo => {
        if(todo.id === item_id)
          todo.isCompleted = !todo.isCompleted;
        return todo;
      })
    });
  }

  render() {
    return (
      <div>
        <AddTodoList handleAdd={this.handleAdd}/>
        <ul>
          <Todo itemList={this.state.itemList} handleDelete={this.handleDelete} handleComplete={this.handleComplete} />
        </ul>
      </div>
    );
  }
}

export default App;
