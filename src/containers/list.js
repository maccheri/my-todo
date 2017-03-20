import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import ListItem from '../components/list-item';
import {toggleTodo} from '../actions/index';

class List extends Component {

    render() {
        const props = _.omit(this.props, 'todos');
        const elements = this.props.todos.map(todo => <ListItem key={todo.id} todo={todo} {...props}/>);

        return (
            <div className='col-sm-offset-2 col-sm-8'>
                <table className='table table-hover table-responsive'>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({todos, filter}) {
    return {todos, filter};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleTodo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
