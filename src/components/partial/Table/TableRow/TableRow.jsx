import React from 'react';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  items: childrenPropTypes
};

const defaultProps = {
  items: null
};

const tableRow = React.memo(({ items }) => (
  <tr>
    {items.map(item => <td key={item}>{item}</td>)}
  </tr>
));

tableRow.propTypes = propTypes;
tableRow.defaultProps = defaultProps;

export default tableRow;
