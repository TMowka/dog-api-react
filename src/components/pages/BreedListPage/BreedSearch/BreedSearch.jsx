import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

const propTypes = {
  searchBreedChange: PropTypes.func.isRequired,
  filter: PropTypes.string
};

const defaultProps = {
  filter: ''
};

const breedSearch = ({ searchBreedChange, filter }) => {
  const searchBreedChangeHandle = event => searchBreedChange(event.target.value);

  return (
    <div className="input-group my-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Breed search</span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Start typing the breed name here ..."
        value={filter}
        onChange={searchBreedChangeHandle}
      />
    </div>
  );
};

breedSearch.propTypes = propTypes;
breedSearch.defaultProps = defaultProps;

const getFilterSelector = state => state.breeds.filter;

const mapStateToPros = state => ({
  filter: getFilterSelector(state)
});

export default connect(mapStateToPros, actions)(breedSearch);
