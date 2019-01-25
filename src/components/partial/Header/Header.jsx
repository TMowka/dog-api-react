import React from 'react';
import PropTypes from 'prop-types';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  title: PropTypes.string,
  children: childrenPropTypes
};

const defaultProps = {
  title: '',
  children: null
};

const header = React.memo(({ title, children }) => (
  <header id="header" className="my-5">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto text-center">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  </header>
));

header.propTypes = propTypes;
header.defaultProps = defaultProps;

export default header;
