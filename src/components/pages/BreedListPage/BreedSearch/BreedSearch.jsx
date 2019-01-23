import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

const propTypes = {
  searchBreedChange: PropTypes.func.isRequired
};

const breedSearch = React.memo(({ searchBreedChange }) => {
  const searchBreedHandle = event => searchBreedChange(event.target.value);

  return (
    <div className="input-group my-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Breed search</span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Start typing the breed name here ..."
        onChange={searchBreedHandle}
      />
    </div>
  );
});

breedSearch.propTypes = propTypes;

export default connect(null, actions)(breedSearch);
