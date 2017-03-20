import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {insertTodo} from '../actions/index';

class AddItem extends Component {
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
        const foundTodo = _.find(this.props.todos, todo => todo.task.toLowerCase() === value.toLowerCase());

        if (typeof foundTodo === 'object') {
            this.setState({error: true});
        } else {
            const lastItemById = _.reduce(this.props.todos, (previous, current, index) => {
                if (typeof current === 'object' && !isNaN(current.id)) {
                    if (current.id > previous.id) {
                        return current;
                    }
                }
            }, { id: 0 });
            
            this.props.insertTodo({ id: lastItemById.id + 1, task: value, isDone: false });
            this.addInput.value = '';
            this.setState({error: false});
        }
    }

    renderError() {
        if (this.state.error) {
            return (
                <div className='has-error col-md-offset-2 col-md-8'>
                    <label className="control-label" htmlFor="addNewTodo">This task already exists!</label>
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
                        {this.renderError()}
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({todos}) {
    return {todos};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        insertTodo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
