import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

import BreedSearch from './BreedSearch/BreedSearch';
import BreedList from './BreedList/BreedList';

const propTypes = {
  fetchBreedList: PropTypes.func.isRequired
};

class BreedListPage extends Component {
  componentDidMount() {
    const { fetchBreedList } = this.props;

    fetchBreedList();
  }

  render() {
    return (
      <div className="col">
        <div className="row">
          <BreedSearch />
        </div>
        <div className="row">
          <BreedList />
        </div>
      </div>
    );
  }
}

BreedListPage.propTypes = propTypes;

export default connect(null, actions)(BreedListPage);
