import React from 'react';
import PropTypes from 'prop-types';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  items: childrenPropTypes,
  className: PropTypes.string
};

const defaultProps = {
  items: null,
  className: ''
};

const tableHead = React.memo(({ items, className }) => (
  <thead className={className}>
    <tr>
      {items.map(item => <th key={item} scope="col">{item}</th>)}
    </tr>
  </thead>
));

tableHead.propTypes = propTypes;
tableHead.defaultProps = defaultProps;

export default tableHead;
