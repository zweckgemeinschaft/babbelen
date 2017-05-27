import React, { Component } from 'react';
import PageWrapper from './material/page_wrapper';
import Chat from './pages/chat';

export default class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Chat />
      </PageWrapper>
    );
  }
}

