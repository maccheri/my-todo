import React, {Component} from 'react';
import { connect } from 'react-redux';
import FilterItem from '../components/filter-item';
import _ from 'lodash';

class Filter extends Component {
    setFilter(type) {
        const filters = _.map(this.props.filters, (filter) => {
            if (filter.type === type) {
                filter.active = true;
            } else {
                filter.active = false;
            }
            return filter;
        });
        // TRIGGER ACTION
        // this.props.setFilter(type);
        // this.setState({filters});
    }

    render() {
        const elements = _.map(this.props.filters, (filter, index) => <FilterItem key={index} {...filter} setFilter={this.setFilter.bind(this)}/>);

        return (
            <div className='row navigation-margin'>
                <ul className="col-md-4 col-md-offset-5 nav nav-pills">
                    {elements}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(Filter);
