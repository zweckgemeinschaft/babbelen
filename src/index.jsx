import React from 'react';
import {render} from 'react-dom';
import App from './App';

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './reducers';

import './stylesheets/generic.css';
import './stylesheets/sidebar.css';

const loggerMiddleware = createLogger()
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


const $ = window.jQuery = require('jquery');
$(document).ready(() => {
  $(".button-collapse").sideNav();
});
