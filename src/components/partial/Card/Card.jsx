import React from 'react';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  image: childrenPropTypes
};

const defaultProps = {
  image: null
};

const card = React.memo(({ image }) => (
  <div className="card text-center bg-secondary p-1">
    {image}
  </div>
));

card.propTypes = propTypes;
card.defaultProps = defaultProps;

export default card;
