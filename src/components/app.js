import React, {Component} from 'react';
import logo from '../logo.svg';
import '../app.css';
import List from './list';
import _ from 'lodash';

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

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.doSomething = this.doSomething.bind(this);
    }

    doSomething(e) {
        e.preventDefault();
        console.log(this.props);
    }

    render() {
        const divStyle = {
            marginTop: 10
        };

        return (
            <div className='col-sm-offset-2 col-md-8' style={divStyle}>
                <form className='form-horizontal' onSubmit={this.doSomething}>
                    <div className='form-group'>
                        <label htmlFor='addNewTodo' className='col-sm-2 control-label'>Add new todo</label>
                        <div className='col-md-8'>
                            <input type="text" className='form-control' id='addNewTodo' placeholder='Type your todo here'/>
                        </div>
                        <button className='btn btn-primary' onClick={this.doSomething}>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

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

    handleDelete() {}

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
                    <AddItem todos={this.state.todos}/>
                    <List todos={this.state.todos} toggleTask={this.onTodoItemClick.bind(this)} handleEdit={this.handleEdit.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default App;
