import PropTypes from 'prop-types';

export const childrenPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]).isRequired;

export default {
  childrenPropTypes
};
