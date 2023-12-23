import { FETCH_RANDOM_GREETING } from '../actions/greetingActions';

const initialState = '';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
