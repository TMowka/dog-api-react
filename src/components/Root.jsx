import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import asyncMiddleware from 'middlewares/async';
import reducers from 'store/reducers';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  children: childrenPropTypes,
  initialState: PropTypes.instanceOf(Object)
};

const defaultProps = {
  children: null,
  initialState: null
};

const root = ({ initialState, children }) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle, max-len
  const store = createStore(
    reducers,
    initialState || {},
    composeEnhancers(applyMiddleware(asyncMiddleware))
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

root.propTypes = propTypes;
root.defaultProps = defaultProps;

export default root;
