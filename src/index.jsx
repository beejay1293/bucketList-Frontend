import React from 'react';
import ReactDOM from 'react-dom';
import store from './stores';
import jwtDecode from 'jwt-decode';
import App from './components/App';
import './assets/styles/style.css';
import setAuthToken from './stores/utils/setAuthToken';
import { loginSuccess } from './stores/actions/auth';


if (localStorage.jwToken) {
    setAuthToken(localStorage.jwToken);
    const decoded = jwtDecode(localStorage.jwToken);
    store.dispatch(loginSuccess(decoded));
  }

ReactDOM.render(<App />, document.getElementById('app'));
