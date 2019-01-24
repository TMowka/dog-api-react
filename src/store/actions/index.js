import axios from 'axios';
import { ALERT_TYPES } from 'util/constants';
import config from 'config/index';
import {
  FETCH_BREEDS, SEARCH_BREED_CHANGE, SHOW_ALERT, HIDE_ALERT
} from './types';

const showAlertActionCreator = (message, type) => ({
  type: SHOW_ALERT,
  payload: { message, type }
});
const hideAlertActionCreator = () => ({ type: HIDE_ALERT });

let alertTimeout;

export const showAlert = (message, type, timeout) => (dispatch) => {
  dispatch(showAlertActionCreator(message, type));

  if (timeout) {
    alertTimeout = setTimeout(() => dispatch(hideAlertActionCreator()), timeout);
  }
};

export const hideAlert = () => (dispatch) => {
  clearTimeout(alertTimeout);

  dispatch(hideAlertActionCreator());
};

export const fetchBreedList = () => async (dispatch) => {
  dispatch(showAlertActionCreator('', ALERT_TYPES.PENDING));
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');

    dispatch(hideAlertActionCreator());
    dispatch({ type: FETCH_BREEDS, payload: response.data.message });
  } catch (error) {
    dispatch(showAlertActionCreator(error.message, ALERT_TYPES.ERROR));

    alertTimeout = setTimeout(() => dispatch(hideAlertActionCreator()), config.alertTimeout);
  }
};

export const searchBreedChange = value => dispatch => dispatch({
  type: SEARCH_BREED_CHANGE, payload: value.toLowerCase()
});
