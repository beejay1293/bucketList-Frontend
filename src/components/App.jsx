import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../stores';
import Routes from './routes/routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRoutes = () => <Routes />;


const App = () => (
  <Provider store={store}>
    <BrowserRouter >
      <AppRoutes />
      <ToastContainer autoClose={2000} />
    </BrowserRouter >
  </Provider>
);

export default App;
