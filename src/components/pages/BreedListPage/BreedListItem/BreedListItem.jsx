import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

  if (subBreeds) {
    breedButton = (
      <div className="btn-group dropright">
        <Link className="btn btn-outline-secondary" to={`/breeds/${breed}`}>{breed}</Link>
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropright</span>
        </button>
        <div className="dropdown-menu">
          {subBreeds.map(subBreed => (
            <li key={subBreed}>{subBreed}</li>
          ))}
        </div>
      </div>
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
