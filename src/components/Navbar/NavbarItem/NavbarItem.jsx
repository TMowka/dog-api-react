import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  children: childrenPropTypes,
  to: PropTypes.string,
  active: PropTypes.bool
};

const defaultProps = {
  children: null,
  to: '',
  active: false
};

const navbarItem = React.memo(({ children, to, active }) => {
  const classes = ['nav-item mx-2'];
  if (active) {
    classes.push('active');
  }

  return (
    <li className={classes.join(' ')}>
      <Link className="nav-link" to={to}>{children}</Link>
    </li>
  );
});

navbarItem.propTypes = propTypes;
navbarItem.defaultProps = defaultProps;

export default navbarItem;
