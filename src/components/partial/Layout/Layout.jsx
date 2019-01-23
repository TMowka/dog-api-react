import React from 'react';
import { childrenPropTypes } from 'util/propTypes';
import './Layout.css';

const propTypes = {
  children: childrenPropTypes
};

const layout = React.memo(({ children }) => (
  <div id="layout">
    <div className="container">
      <div className="col">
        <div className="row">
          {children}
        </div>
      </div>
    </div>
  </div>
));

layout.propTypes = propTypes;

export default layout;
