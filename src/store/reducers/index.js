import { combineReducers } from 'redux';

import alertReducer from './alert';
import breedsReducer from './breeds';

export default combineReducers({
  alert: alertReducer,
  breeds: breedsReducer
});
