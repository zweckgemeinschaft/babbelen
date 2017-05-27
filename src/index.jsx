import React from 'react';
import {render} from 'react-dom';
import App from './App';

import {createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import combinedReducers from './reducers';

import './stylesheets/generic.css';
import './stylesheets/sidebar.css';

const logger = createLogger();
const store = createStore(
  combinedReducers
  //applyMiddleware(thunk, promise, logger)
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
