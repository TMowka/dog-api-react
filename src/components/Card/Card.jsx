import React from 'react';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  children: childrenPropTypes
};

const defaultProps = {
  children: null
};

const card = React.memo(({ children }) => (
  <div className="card text-center">
    <div className="card-body">
      {children}
    </div>
  </div>
));

card.propTypes = propTypes;
card.defaultProps = defaultProps;

export default card;
