import axios from 'axios';
import { ALERT_TYPES } from 'util/constants';
import config from 'config/index';
import {
  FETCH_BREEDS, SEARCH_BREED_CHANGE, SHOW_ALERT, HIDE_ALERT, FETCH_IMAGES, SET_ACTIVE_IMAGE_INDEX
} from './types';

// #region alert
let alertTimeout;

export const hideAlert = () => {
  clearTimeout(alertTimeout);

  return { type: HIDE_ALERT };
};

export const showAlert = (message, type, timeout) => (dispatch) => {
  dispatch({ type: SHOW_ALERT, payload: { message, type } });

  if (timeout) {
    alertTimeout = setTimeout(() => dispatch(hideAlert()), timeout);
  }
};
// #endregion alert

export const fetchBreedList = () => async (dispatch) => {
  dispatch(showAlert('', ALERT_TYPES.PENDING));
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');

    dispatch(hideAlert());
    dispatch({ type: FETCH_BREEDS, payload: response.data.message });
  } catch (error) {
    dispatch(showAlert(error.message, ALERT_TYPES.ERROR, config.alert.timeout));
  }
};

export const searchBreedChange = value => dispatch => dispatch({
  type: SEARCH_BREED_CHANGE, payload: value.toLowerCase()
});

export const fetchImages = (breed, subBreed) => async (dispatch) => {
  dispatch(showAlert('', ALERT_TYPES.PENDING));
  try {
    let url = 'https://dog.ceo/api/breed';
    if (subBreed) {
      url += `/${breed}/${subBreed}/images/random/${config.images.limit}`;
    } else {
      url += `/${breed}/images/random/${config.images.limit}`;
    }

    const response = await axios.get(url);

    dispatch(hideAlert());
    dispatch({ type: FETCH_IMAGES, payload: response.data.message });
  } catch (error) {
    dispatch(showAlert(error.message, ALERT_TYPES.ERROR, config.alert.timeout));
  }
};

export const fetchRandomImages = () => async (dispatch) => {
  dispatch(showAlert('', ALERT_TYPES.PENDING));
  try {
    const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${config.images.limit}`);

    dispatch(hideAlert());
    dispatch({ type: FETCH_IMAGES, payload: response.data.message });
  } catch (error) {
    dispatch(showAlert(error.message, ALERT_TYPES.ERROR, config.alert.timeout));
  }
};

export const setActiveImageIndex = index => ({
  type: SET_ACTIVE_IMAGE_INDEX,
  payload: index
});
