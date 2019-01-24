import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Dropright from 'components/partial/Dropright/Dropright';

const propTypes = {
  breed: PropTypes.string,
  subBreeds: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
  breed: '',
  subBreeds: null
};

const breedListItem = React.memo(({ breed, subBreeds }) => {
  let breedButton = (
    <Link className="btn btn-outline-secondary" to={`/breeds/${breed}`}>{breed}</Link>
  );

  if (subBreeds && subBreeds.length > 0) {
    breedButton = (
      <Dropright
        items={
          subBreeds.map(subBreed => (
            <Dropright.Item key={subBreed}>
              <Link
                to={`/breeds/${breed}/${subBreed}`}
              >
                {subBreed}
              </Link>
            </Dropright.Item>
          ))
        }
      >
        <Link className="btn btn-outline-secondary" to={`/breeds/${breed}`}>{breed}</Link>
      </Dropright>
    );
  }

  return (
    <div className="card text-center m-1">
      <div className="card-body">
        {breedButton}
      </div>
    </div>
  );
});

breedListItem.propTypes = propTypes;
breedListItem.defaultProps = defaultProps;

export default breedListItem;
