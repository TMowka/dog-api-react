import { FETCH_IMAGES, SET_ACTIVE_IMAGE_INDEX } from '../actions/types';

const initialState = {
  list: [],
  activeIndex: -1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        list: action.payload
      };

    case SET_ACTIVE_IMAGE_INDEX:
      return {
        ...state,
        activeIndex: action.payload
      };

    default:
      return state;
  }
};
