import React from 'react';
import { childrenPropTypes } from 'util/propTypes';
import './Layout.css';

const propTypes = {
  children: childrenPropTypes
};

const layout = React.memo(({ children }) => (
  <div className="layout">
    <div className="container h-100">
      {children}
    </div>
  </div>
));

layout.propTypes = propTypes;

export default layout;
