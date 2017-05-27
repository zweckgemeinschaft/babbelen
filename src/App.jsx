import React, { Component } from 'react';
import PageWrapper from './material/page_wrapper';
import Chat from './pages/chat';

export default class App extends Component {
  render() {
    return (
      <PageWrapper>
      <Chat onMessage={alert} displayNames={true} messages={[
        {
          type: "text",
          own: true,
          text: "Hello World 1, 2, 3",
          id: 1
        },
        {
          type: "text",
          own: false,
          sender: "Daniel",
          id: 2,
          text: "Wtf is wrong with you?"
        }
      ]} />
      </PageWrapper>
    );
  }
}

