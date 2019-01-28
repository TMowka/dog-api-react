import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';

import BreedListItem from './BreedListItem/BreedListItem';

const propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired
};

const breedList = ({ breeds }) => (
  <div className="col d-flex justify-content-center flex-wrap">
    {breeds.map(breed => (
      <BreedListItem
        key={breed}
        breed={breed}
        subBreeds={breeds[breed]}
      />
    ))}
  </div>
);

breedList.propTypes = propTypes;

const filteredBreedsSelector = createSelector(
  state => state.breeds.list,
  state => state.breeds.filter,
  (breeds, filter) => (
    breeds
      ? Object.keys(breeds).filter(breed => breed.includes(filter))
      : []
  )
);

const mapStateToProps = state => ({
  breeds: filteredBreedsSelector(state)
});

export default connect(mapStateToProps)(breedList);
