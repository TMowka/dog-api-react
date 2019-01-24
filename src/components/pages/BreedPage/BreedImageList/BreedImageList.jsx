import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/partial/Card/Card';
import LazyImage from 'components/partial/LazyImage/LazyImage';

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onImageClick: PropTypes.func
};

const defaultProps = {
  onImageClick: null
};

const breedImageList = React.memo(({ images, onImageClick }) => (
  <div className="col card-columns mt-3">
    {images.map((image, index) => (
      <div
        key={image}
        role="presentation"
        tabIndex={index + 1}
        onClick={() => onImageClick(index)}
      >
        <Card
          image={<LazyImage className="card-img-top" src={image} />}
        />
      </div>
    ))}
  </div>
));

breedImageList.propTypes = propTypes;
breedImageList.defaultProps = defaultProps;

export default breedImageList;
