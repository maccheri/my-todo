import React, { Component } from 'react';
import _ from 'lodash';

export default class AddItem extends Component {
    constructor(props) {
        super(props);

        this.onAddTodo = this.onAddTodo.bind(this);
        this.state = {
            error: null
        };
    }

    onAddTodo(e) {
        e.preventDefault();
        const {value} = this.addInput;
        const foundTodo = _.find(this.props.todos, todo => todo.task === value);

        if (typeof foundTodo === 'object') {
            this.setState({error: true});
        } else {
            const lastItemById = _.reduce(this.props.todos, (previous, current, index) => {
                if (typeof previous === 'object' && !isNaN(previous.id)) {
                    if (current.id > previous.id) {
                        return current;
                    }
                } else {
                    return { id: 0 };
                }
            }, {});
            this.props.handleAdd(value, lastItemById);
            this.setState({error: false});
        }
    }

    renderError() {
        if (this.state.error) {
            return (
                <div className='has-error col-md-offset-2 col-md-8'>
                    <label className="control-label" htmlFor="addNewTodo">Input with error</label>
                </div>
            );
        }
    }

    render() {
        const divStyle = {
            marginTop: 10
        };

        return (
            <div className='col-md-offset-2 col-md-8' style={divStyle}>
                <form className='form-horizontal' onSubmit={this.onAddTodo}>
                    <div className='form-group'>
                        <label htmlFor='addNewTodo' className='col-md-2 control-label'>Add new todo</label>
                        <div className='col-md-8'>
                            <input type="text" className='form-control' id='addNewTodo' placeholder='Type your todo here' ref={(input) => this.addInput = (input)}/>
                        </div>
                        <button className='btn btn-primary' onClick={this.onAddTodo}>Add</button>
                        {this.renderError}
                    </div>
                </form>
            </div>
        );
    }
}
