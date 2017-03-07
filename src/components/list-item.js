import React, { Component } from 'react';

export default class ListItem extends Component{

  renderButtons(){
    if(this.props.isCompleted){
      return (<td className="text-right">
          <button type='button' className='btn btn-danger'>Delete</button>
      </td>);
    }

    return (<td className="text-right">
      <button type='button' className='btn btn-primary'>Edit</button>
    </td>);
  }

  render(){
    const trStyle = (this.props.isCompleted) ? 'success' : 'warning';

    return (
      <tr className={trStyle} role='button' onClick={this.props.onClick}>
        <td>{this.props.id}</td>
        <td>{this.props.task}</td>
          {this.renderButtons()}
      </tr>
    );
  }
}
