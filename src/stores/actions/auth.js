import { toast } from "react-toastify";
import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGIN_ERROR, SIGNUP_ERROR, LOADING } from '../constants';
import authAPI from '../utils/authAPI';


export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: user,
  });
  
  export const signupSuccess = user => ({
    type: SIGNUP_SUCCESS,
    payload: user,
  });
  
  export const loginError = error => ({
    type: LOGIN_ERROR,
    payload: error,
  });
  
  export const signupError = error => ({
    type: SIGNUP_ERROR,
    payload: error,
  });

  export const authenticating = () => ({
      type: LOADING,
  })

  const auth = (type, user, history) => async (dispatch) => {
     try {
        dispatch(authenticating());

        const response = await authAPI(type, user);
        await localStorage.setItem('jwToken', response.data.data.token);
        const dispatchType = type === 'signup' ? signupSuccess : loginSuccess
        dispatch(dispatchType(response.data.data));
        toast.success("LOGIN SUCCESS");
        history.push('/dashboard');

     } catch (error) {
         const errResponse = error.response;   
         const dispatchType = type === 'signup' ? signupError : loginError
         dispatch(dispatchType(errResponse));
         toast.error(errResponse.data.error);
         
     }

  }

  export default auth;

