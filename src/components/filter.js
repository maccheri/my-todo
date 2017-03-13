import React, {Component} from 'react';
import FilterItem from './filter-item';
import _ from 'lodash';

export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: [
                {
                    type: 'SHOW_ALL',
                    text: 'Show All',
                    active: true
                }, {
                    type: 'DONE',
                    text: 'Done',
                    active: false
                }, {
                    type: 'UNDONE',
                    text: 'Undone',
                    active: false
                }
            ]
        };
    }

    setFilter(type) {
        const filters = _.map(this.state.filters, (filter) => {
            if (filter.type === type) {
                filter.active = true;
            } else {
                filter.active = false;
            }
            return filter;
        });
        this.props.setFilter(type);
        this.setState({filters});
    }

    render() {
        const elements = _.map(this.state.filters, (filter, index) => <FilterItem key={index} {...filter} setFilter={this.setFilter.bind(this)}/>);

        return (
            <div className='row navigation-margin'>
                <ul className="col-md-4 col-md-offset-5 nav nav-pills">
                    {elements}
                </ul>
            </div>
        );
    }
}
