import React from 'react';
import { render } from 'react-dom';
import App from './App';

import './stylesheets/generic.css';
import './stylesheets/sidebar.css';

render(
  <App />,
  document.getElementById('root')
);


const $ = window.jQuery = require('jquery');
$(document).ready(() => {
  $(".button-collapse").sideNav();
});
