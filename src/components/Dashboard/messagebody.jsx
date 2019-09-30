import React, { Component } from 'react';
import SingleMessage from './SingleMessage';

class MessageBody extends Component {
  constructor() {
    super();
    this.state = {
      message: [
        {
          styles: 'inbox__message',
          name: 'draft',
          message: 'i need a message',
          time: '12th',
          id: 1,
        },
        {
          styles: 'draft__message',
          name: 'draft',
          message: 'i need a message',
          time: '12th',
          id: 2,
        },

      ],
    };
  }

  render() {
    const { message } = this.state;
    return (
      <ul className="inbox__body">
        {message.map(msg => (
          <SingleMessage
            style={msg.styles}
            name={msg.name}
            messages={msg.message}
            time={msg.time}
            key={msg.id}
          />
        ))}

      </ul>
    );
  }
}


export default MessageBody;
