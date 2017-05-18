import React, { Component } from 'react';
import Button from './material/button';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Button icon="cloud">Hello World</Button>
      </div>
    );
  }
}
