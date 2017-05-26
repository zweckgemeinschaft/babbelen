import React, { Component } from 'react';
import Button from './material/button';
import Icon from './material/icon';

export default class App extends Component {
  render() {
    const test = () => alert("hello!");

    return (
      <div>
        <h1>Hello, World!</h1>
        <Button icon="cloud" iconSet="font-awesome" onClick={test}>Hello World</Button>
        <Icon>bandcamp</Icon>
      </div>
    );
  }
}
