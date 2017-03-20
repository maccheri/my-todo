import React, {Component} from 'react';

export default class FilterItem extends Component {

    render() {
        const {activeFilter, filter, changeFilter} = this.props;
        return (
            <li role="presentation" className={(activeFilter === filter.type)
                ? 'active'
                : ''}>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    changeFilter(filter.type);
                }}>{filter.text}</a>
            </li>
        );
    }
}
