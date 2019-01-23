import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BreedListItem from '../BreedListItem/BreedListItem';

const propTypes = {
  breeds: PropTypes.instanceOf(Object),
  filter: PropTypes.string
};

const defaultProps = {
  breeds: null,
  filter: ''
};

const breedList = React.memo(({ breeds, filter }) => (
  <div className="col d-flex justify-content-center flex-wrap">
    {breeds && Object.keys(breeds)
      .filter(breed => breed.includes(filter))
      .map(breed => (
        <BreedListItem
          key={breed}
          breed={breed}
          subBreeds={['test1', 'test2', 'test3']} // mock!!!
        />
      ))}
  </div>
));

breedList.propTypes = propTypes;
breedList.defaultProps = defaultProps;

const mapStateToProps = state => ({
  breeds: state.breeds.list,
  filter: state.breeds.filter
});

export default connect(mapStateToProps)(breedList);
