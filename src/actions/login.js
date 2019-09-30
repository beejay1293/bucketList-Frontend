import types from './types';
import request from '../utilities';

const { LOGIN, LOGIN_ERROR } = types;

const loginAction = obj => async (dispatch) => {
  try {
    const response = await request('POST', '/auth/login', obj);
    const res = await response.json();
    if (res.status === 'failed') {
      throw new Error(res.error);
    } else if (res.status === 'success') {
      localStorage.setItem('auth', res.data[0].token);
      dispatch({
        type: LOGIN,
        payload: res.data[0].token,
      });
    } 
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.message });
    dispatch({ type: LOGIN_ERROR, payload: '' });
  }
};

export default loginAction;
