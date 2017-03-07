import React, { Component } from 'react';
import ListItem from './list-item';

export default class List extends Component{
  render(){
    const elements = this.props.todos.map(todo => <ListItem key={todo.id} {...todo} />);

    return (<div className='col-sm-offset-2 col-sm-8'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Config</th>
            </tr>
          </thead>
          <tbody>
            {elements}
          </tbody>
        </table>
    </div>
    );
  }
}
