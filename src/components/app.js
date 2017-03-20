import React, {Component} from 'react';
import update from 'react-addons-update';
import List from '../containers/list';
import AddItem from './add-item';
import Filter from '../containers/filter';
import _ from 'lodash';
import '../app.css';
import logo from '../logo.svg';

class App extends Component {

    // onTodoItemClick(id) {
    //     const foundTodo = _.find(this.state.todos, todo => todo.id === id);
    //     foundTodo.isDone = !foundTodo.isDone;
    //
    //     this.setState({todos: this.state.todos});
    // }
    //
    // handleEdit(id, newTaskName) {
    //     const editedTodo = _.find(this.state.todos, todo => todo.id === id);
    //     editedTodo.task = newTaskName;
    //
    //     this.setState({todos: this.state.todos});
    // }
    //
    // handleDelete(taskId) {
    //     const index = _.findIndex(this.state.todos, (todo) => todo.id === taskId);
    //     this.setState({
    //         todos: update(this.state.todos, {
    //             $splice: [
    //                 [index, 1]
    //             ]
    //         })
    //     });
    // }
    //
    // handleAdd(newTaskName, lastItemById) {
    //     const {id} = lastItemById;
    //     const newTaskId = id + 1;
    //
    //     var newState = [
    //         ...this.state.todos, {
    //             id: newTaskId,
    //             task: newTaskName,
    //             isDone: false
    //         }
    //     ];
    //
    //     this.setState({todos: newState});
    // }
    //
    // setFilter(filter){
    //   this.setState({filter});
    // }

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
                  {/* <AddItem handleAdd={this.handleAdd.bind(this)}/>
                  <Filter setFilter={this.setFilter.bind(this)}/>
                  <List toggleTask={this.onTodoItemClick.bind(this)} handleEdit={this.handleEdit.bind(this)} handleDelete={this.handleDelete.bind(this)} /> */}
                  <AddItem />
                  <Filter />
                  <List />
                </div>
            </div>
        );
    }
}

export default App;
