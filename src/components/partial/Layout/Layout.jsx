import React from 'react';
import { childrenPropTypes } from 'util/propTypes';
import './Layout.css';

const propTypes = {
  children: childrenPropTypes
};

const layout = React.memo(({ children }) => (
  <div className="container" id="container">
    <div className="col">
      <div className="row">
        {children}
      </div>
    </div>
  </div>
));

layout.propTypes = propTypes;

export default layout;
