import React from 'react';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  children: childrenPropTypes
};

const defaultProps = {
  children: null
};

const tableBody = React.memo(({ children }) => (
  <tbody>
    {children}
  </tbody>
));

tableBody.propTypes = propTypes;
tableBody.defaultProps = defaultProps;

export default tableBody;
