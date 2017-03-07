import React, {Component} from 'react';
import ListItem from './list-item';

export default class List extends Component {

    onItemClick(todo) {
        // console.log(todo);
        this.props.onClick(todo);
    }

    render() {
        const elements = this.props.todos.map(todo => <ListItem key={todo.id} {...todo} onClick={this.onItemClick(todo)}/>);

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
