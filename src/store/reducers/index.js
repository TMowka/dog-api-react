import { combineReducers } from 'redux';

import breedsReducer from 'store/reducers/breeds';

export default combineReducers({
  breeds: breedsReducer
});
