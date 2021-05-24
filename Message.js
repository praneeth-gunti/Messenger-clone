import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message =  forwardRef(({message, username}, ref) => {
  const isUser = username === message.username;

  return (
    <div ref = {ref} className = {`message ${isUser && 'message_user'}`}>
      <p className = "message_username" >{ !isUser && `${message.username || 'Unknown User'}: `}</p>
      <Card className = {isUser ? "message_userCard": "message_guestCard" }>
        <CardContent className = "message_cardContent" >
          <Typography
            className = "message_typography"
            color = "white"
            variant ="h5"
            component = "h2"
          >
          <div>
            <p className = "message_message" >{message.message}</p>
          </div>
          </Typography>
        </CardContent>
      </Card>
    </div>

  )
})

export default Message;
