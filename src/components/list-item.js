import React, {Component} from 'react';

export default class ListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }

    renderDoneUndone() {
        if (this.props.todo.isDone) {
            return (
                <td className='col-md-1'>
                    <button type='button' className='btn btn-default' onClick={() => this.props.toggleTodo(this.props.todo)}>Undone</button>
                </td>
            );
        }

        return (
            <td className='col-md-1'>
                <button type='button' className='btn btn-default' onClick={() => this.props.toggleTodo(this.props.todo)}>Done</button>
            </td>
        );
    }

    renderButtons() {
        const {editing} = this.state;
        const {todo, removeTodo} = this.props;

        if (todo.isDone) {
            return (
                <td className="text-right col-md-2">
                    <button type='button' className='btn btn-danger' onClick={() => removeTodo(todo)}>Delete</button>
                </td>
            );
        }

        if (editing) {
            return (
                <td className="text-right col-md-3">
                    <button type='button' className='btn btn-success' onClick={(e) => this.editTask(e)}>Save</button>
                    <button type='button' className='btn btn-danger' onClick={() => this.setState({editing: false})}>Cancel</button>
                </td>
            );
        }

        return (
            <td className="text-right col-md-2">
                <button type='button' className='btn btn-primary' onClick={() => this.setState({editing: true})}>Edit</button>
            </td>
        );
    }

    editTask(e) {
        e.preventDefault();
        const {handleEdit, updateTodo, todo} = this.props;
        if (this.taskEditingInput.value.toString().trim() !== '') {
            updateTodo({ ...todo, task: this.taskEditingInput.value});
            this.setState({ editing: false });
        }
    }

    renderDescription() {
        const {task} = this.props.todo;
        if (this.state.editing) {
            return (
                <td>
                    <form onSubmit={this.editTask.bind(this)}>
                        <input type='text' className='form-control' defaultValue={task} ref={(input) => this.taskEditingInput = input}/>
                    </form>
                </td>
            );
        }

        return (
            <td>{task}</td>
        );
    }

    renderItem() {
        const {isDone} = this.props.todo;
        const {activeFilter} = this.props.filter;
        const trStyle = (isDone)
            ? 'success'
            : 'warning';

        const doneCondition = (activeFilter === 'DONE' && isDone);
        const unDoneCondition = (activeFilter === 'UNDONE' && !isDone);
        const allCondition = (activeFilter === 'SHOW_ALL');
        const showItem = doneCondition || unDoneCondition || allCondition;

        if (showItem) {
            return (
                <tr className={trStyle} role='button'>
                    {this.renderDoneUndone()}
                    {this.renderDescription()}
                    {this.renderButtons()}
                </tr>
            );
        }

        return null;
    }

    render() {
        return (this.renderItem());
    }
}
