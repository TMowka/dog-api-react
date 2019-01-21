import axios from 'axios';
import { FETCH_BREEDS, FETCH_BREEDS_PENDING, SEARCH_BREED_CHANGE } from './types';

export const fetchBreedList = () => async (dispatch) => {
  dispatch({ type: FETCH_BREEDS_PENDING });
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');

    dispatch({ type: FETCH_BREEDS, payload: response.data.message });
  } catch (error) {
    dispatch({ type: FETCH_BREEDS, payload: [] });
  }
};

export const searchBreedChange = value => dispatch => dispatch({
  type: SEARCH_BREED_CHANGE, payload: value
});
