import PropTypes from 'prop-types';

export const childrenPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

export const locationPropTypes = PropTypes.shape({
  pathname: PropTypes.string
});

export const historyPropTypes = PropTypes.shape({
  push: PropTypes.func.isRequired
});
