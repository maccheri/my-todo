import React, {Component} from 'react';
import update from 'react-addons-update';
import List from './list';
import AddItem from './add-item';
import _ from 'lodash';
import '../app.css';
import logo from '../logo.svg';

const todoList = [
    {
        id: 1,
        task: 'Watch TV',
        isCompleted: false
    }, {
        id: 2,
        task: 'Wash the dishes',
        isCompleted: true
    }
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

        this.setState({todos: this.state.todos});
    }

    handleEdit(id, newTaskName) {
        const editedTodo = _.find(this.state.todos, todo => todo.id === id);
        editedTodo.task = newTaskName;

        this.setState({todos: this.state.todos});
    }

    handleDelete(taskId) {
        const index = _.findIndex(this.state.todos, (todo) => todo.id === taskId);
        this.setState({
            todos: update(this.state.todos, {
                $splice: [
                    [index, 1]
                ]
            })
        });
    }

    handleAdd(newTaskName, lastItemById) {
        const {id} = lastItemById;
        const newTaskId = id + 1;

        var newState = [
            ...this.state.todos, {
                id: newTaskId,
                task: newTaskName,
                isCompleted: false
            }
        ];

        this.setState({todos: newState});
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
                    <AddItem todos={this.state.todos} handleAdd={this.handleAdd.bind(this)}/>
                    <List todos={this.state.todos} toggleTask={this.onTodoItemClick.bind(this)} handleEdit={this.handleEdit.bind(this)} handleDelete={this.handleDelete.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default App;
