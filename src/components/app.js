import React, {Component} from 'react';
import logo from '../logo.svg';
import '../app.css';
import List from './list';
import _ from 'lodash';

const todoList = [
    { id: 1, task: 'Watch TV', isCompleted: false },
    { id: 2, task: 'Wash the dishes', isCompleted: true }
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: todoList
        };
    }

    onTodoItemClick(id) {
      const foundTodo = _.find(this.state.todos, todo => todo.id === id);
      foundTodo.isCompleted = !foundTodo.isCompleted;

      this.setState({ todos: this.state.todos });
    }

    handleEdit(id, newTaskName){
      const editedTodo = _.find(this.state.todos, todo => todo.id === id);
      editedTodo.task = newTaskName;

      this.setState({ todos: this.state.todos });
    }

    handleDelete(){

    }

    render() {
        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>To do list</h2>
                    </div>
                </div>
                <div className='row'>
                    <List
                      todos={this.state.todos}
                      toggleTask={this.onTodoItemClick.bind(this)}
                      handleEdit={this.handleEdit.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default App;
