import * as React from 'react';

export default class Chat extends React.Component {

  static propTypes = {
    messages: React.PropTypes.array,
    displayNames: React.PropTypes.bool,
    onMessage: React.PropTypes.func
  }

  static defaultProps = {
    messages: [],
    displayNames: false
  }

  sendMessage(event) { 
    event.preventDefault();
 
    const {onMessage} = this.props;

    const messageBox = this.refs.message;
    const value = messageBox.value;
    messageBox.value = "";

    onMessage ? onMessage(value) : null; 
  }

  render() {
    let messages_jsx = [];
    this.props.messages.forEach(msg => {
      let msg_content; 

      switch (msg.type) {
        case "text":
          msg_content = <span>
            { msg.own ?
              "Von dir: " : 
              (this.props.displayNames ?
                `Von ${msg.sender}: ` :
                "Von jemand anderem: ") }
            {msg.text}
          </span>;
      }

      const msg_jsx =
        <div key={msg.id} data-msgid={msg.id} data-msgtype={msg.type}>
          {msg_content}
        </div>;

      messages_jsx.push(msg_jsx);
    });


    return (
      <div>
        {messages_jsx}
        <form action="#" onSubmit={e => this.sendMessage(e)}>
          <input ref="message" type="text" placeholder="Write something fancy here" />
          <input type="submit" value="Send!" />
        </form>
      </div>
    );  
  }

}