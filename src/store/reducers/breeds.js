import { FETCH_BREEDS, SEARCH_BREED_CHANGE } from '../actions/types';

const initialState = {
  list: null,
  filter: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREEDS:
      return {
        ...state,
        list: action.payload
      };

    case SEARCH_BREED_CHANGE:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
};
