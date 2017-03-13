import React, {Component} from 'react';

export default class ListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }

    renderDoneUndone() {
        if (this.props.isDone) {
            return (
                <td className='col-md-1'>
                    <button type='button' className='btn btn-default' onClick={this.props.toggleTask.bind(this, this.props.id)}>Undone</button>
                </td>
            );
        }

        return (
            <td className='col-md-1'>
                <button type='button' className='btn btn-default' onClick={this.props.toggleTask.bind(this, this.props.id)}>Done</button>
            </td>
        );
    }

    renderButtons() {
        const {editing} = this.state;
        const {isDone, id} = this.props;

        if (isDone) {
            return (
                <td className="text-right col-md-2">
                    <button type='button' className='btn btn-danger' onClick={this.props.handleDelete.bind(this, id)}>Delete</button>
                </td>
            );
        }

        if (editing) {
            return (
                <td className="text-right col-md-3">
                    <button type='button' className='btn btn-success' onClick={this.editTask.bind(this)}>Save</button>
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
        const {handleEdit, id} = this.props;
        if (this.taskEditingInput.value.toString().trim() !== '') {
            handleEdit(id, this.taskEditingInput.value);
            this.setState({editing: false});
        }
    }

    renderDescription() {
        if (this.state.editing) {
            return (
                <td>
                    <form onSubmit={this.editTask.bind(this)}>
                        <input type='text' className='form-control' defaultValue={this.props.task} ref={(input) => this.taskEditingInput = input}/>
                    </form>
                </td>
            );
        }

        return (
            <td>{this.props.task}</td>
        );
    }

    renderItem() {
        const {isDone, filter} = this.props;
        const trStyle = (isDone)
            ? 'success'
            : 'warning';

        const doneCondition = (filter === 'DONE' && isDone);
        const unDoneCondition = (filter === 'UNDONE' && !isDone);
        const allCondition = (filter === 'SHOW_ALL');
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
