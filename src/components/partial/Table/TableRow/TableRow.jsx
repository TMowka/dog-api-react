import React from 'react';
import PropTypes from 'prop-types';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  children: childrenPropTypes,
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const tableRow = React.memo(({ children, className }) => (
  <tr className={className}>
    {children}
  </tr>
));

tableRow.propTypes = propTypes;
tableRow.defaultProps = defaultProps;

export default tableRow;
