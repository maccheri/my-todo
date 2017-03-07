import React, { Component } from 'react';

export default class ListItem extends Component{
  render(){
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.task}</td>
        <td>
          <button type='button' className='btn btn-success'>Edit</button>
          <button type='button' className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    );
  }
}
