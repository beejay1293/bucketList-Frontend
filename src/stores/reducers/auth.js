
import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_SUCCESS, SIGNUP_ERROR, LOADING } from '../constants';
const initialState = {
  isAuthenticated: !!localStorage.getItem('jwToken'),
  error: {},
  user: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: {}
      };
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        user: {}
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
