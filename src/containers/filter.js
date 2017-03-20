import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {changeFilter} from '../actions/index';
import FilterItem from '../components/filter-item';

class Filter extends Component {
    render() {
        const {activeFilter, filters} = this.props.filters;
        const elements = _.map(filters, (filter, index) => <FilterItem key={index} filter={filter} activeFilter={activeFilter} changeFilter={this.props.changeFilter}/>);

        return (
            <div className='row navigation-margin'>
                <ul className="col-md-4 col-md-offset-5 nav nav-pills">
                    {elements}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      filters: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeFilter
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
