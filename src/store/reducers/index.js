import { combineReducers } from 'redux';

import alertReducer from './alert';
import breedsReducer from './breeds';
import imagesReducer from './images';

export default combineReducers({
  alert: alertReducer,
  breeds: breedsReducer,
  images: imagesReducer
});
