import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home/home';
import Auth from './Auth/auth';
import store from '../stores';


const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
      </div>
    </Router>
  </Provider>
);

export default App;
