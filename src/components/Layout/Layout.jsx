import React from 'react';
import { childrenPropTypes } from 'util/propTypes';
import './Layout.css';

const propTypes = {
  children: childrenPropTypes
};

const defaultProps = {
  children: null
};

const layout = React.memo(({ children }) => (
  <div className="layout d-flex">
    <div className="container h-100">
      {children}
    </div>
  </div>
));

layout.propTypes = propTypes;
layout.defaultProps = defaultProps;

export default layout;
