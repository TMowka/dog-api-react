import { combineReducers } from 'redux';

import collectionsReducer from 'store/reducers/collections';

export default combineReducers({
  collections: collectionsReducer
});
