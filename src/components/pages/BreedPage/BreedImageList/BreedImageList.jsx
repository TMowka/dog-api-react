import React from 'react';
import PropTypes from 'prop-types';

import BreedThumbnailImage from '../BreedThumbnailImage/BreedThumbnailImage';

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

const breedImageList = React.memo(({ images, onImageClick }) => (
  <div className="col card-columns mt-3">
    {images.map((image, index) => (
      <div
        key={image}
        role="presentation"
        tabIndex={index + 1}
        onClick={() => onImageClick(index)}
        className="card text-center"
      >
        <BreedThumbnailImage className="card-img-top" src={image} />
      </div>
    ))}
  </div>
));

breedImageList.propTypes = propTypes;

export default breedImageList;
