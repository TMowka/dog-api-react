import { SHOW_ALERT, HIDE_ALERT } from '../actions/types';

const initialState = {
  message: '',
  type: '',
  visible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        visible: true
      };

    case HIDE_ALERT:
      return {
        ...state,
        visible: false
      };

    default:
      return state;
  }
};
