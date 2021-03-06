
import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_SUCCESS, SIGNUP_ERROR, AUTHENTICATING, LOGOUT } from '../constants';
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
        error: {},
        isAuthenticated: !!localStorage.getItem('jwToken')
      };
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        user: {}
      };
    case AUTHENTICATING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT: 
       return {
         ...state,
         isAuthenticated: false,
       }
    default:
      return state;
  }
};
