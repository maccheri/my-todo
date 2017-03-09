import React, {Component} from 'react';
import ListItem from './list-item';
import _ from 'lodash';

export default class List extends Component {

    render() {
        const props = _.omit(this.props, 'todos');

        const elements = this.props.todos.map(todo => <ListItem key={todo.id} {...todo} {...props}/>);

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
