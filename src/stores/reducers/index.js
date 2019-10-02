import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import authReducer from './auth';
import bucketListReducer from './bucketlists';

export const history = createBrowserHistory();

const appReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
  buckets: bucketListReducer,
});


export default (state, action) => appReducer(state, action);
