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

const tableData = React.memo(({ children, className }) => (
  <td className={className}>
    {children}
  </td>
));

tableData.propTypes = propTypes;
tableData.defaultProps = defaultProps;

export default tableData;
