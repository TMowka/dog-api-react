import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

import BreedSearch from './BreedSearch/BreedSearch';
import BreedList from './BreedList/BreedList';

const propTypes = {
  fetchBreedList: PropTypes.func.isRequired,
  pending: PropTypes.bool
};

const defaultProps = {
  pending: false
};

class BreedListPage extends Component {
  componentDidMount() {
    this.fetchBreedList();
  }

  fetchBreedList() {
    const { fetchBreedList } = this.props;

    fetchBreedList();
  }

  renderBreedList() {
    const { pending } = this.props;

    const spinner = (
      <div className="col d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );

    return pending ? spinner : <BreedList />;
  }

  render() {
    return (
      <div className="col">
        <div className="row">
          <BreedSearch />
        </div>
        <div className="row">
          {this.renderBreedList()}
        </div>
      </div>
    );
  }
}

BreedListPage.propTypes = propTypes;
BreedListPage.defaultProps = defaultProps;

const mapStateToProps = state => ({
  breeds: state.breeds.list,
  pending: state.breeds.pending,
  filter: state.breeds.filter
});

export default connect(mapStateToProps, actions)(BreedListPage);
