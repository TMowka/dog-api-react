import React from 'react';
import { Link } from 'react-router-dom';

const navbarItem = React.memo(({ children, to, active }) => {
  const classes = ['nav-item'];
  if (active) {
    classes.push('active');
  }

  return (
    <li className={classes.join(' ')}>
      <Link className="nav-link" to={to}>{children}</Link>
    </li>
  );
});

export default navbarItem;
