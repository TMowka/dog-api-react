import { FETCH_BREEDS, FETCH_BREEDS_PENDING, SEARCH_BREED_CHANGE } from '../actions/types';

const initialState = {
  list: null,
  pending: false,
  filter: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREEDS:
      return {
        ...state,
        list: action.payload,
        pending: false
      };

    case FETCH_BREEDS_PENDING:
      return {
        ...state,
        pending: true
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
