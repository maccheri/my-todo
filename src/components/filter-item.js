import React, { Component } from 'react';

export default class FilterItem extends Component {

  setFilter(type, e) {
    e.preventDefault();
    this.props.setFilter(type);
  }

  render(){
      return (<li role="presentation" className={(this.props.active) ? 'active' : ''}>
          <a href="#" onClick={this.setFilter.bind(this, this.props.type)}>{this.props.text}</a>
      </li>);
  }
}
