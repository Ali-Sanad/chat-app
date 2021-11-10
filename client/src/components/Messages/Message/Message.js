import React from 'react';

import classes from './Message.module.css';

import ReactEmoji from 'react-emoji';

const Message = ({message: {text, user}, name}) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={[classes.messageContainer, classes.justifyEnd].join(' ')}>
      <p className={[classes.sentText, classes.pr10].join(' ')}>{'You'}</p>
      <div className={[classes.messageBox, classes.backgroundBlue].join(' ')}>
        <p className={[classes.messageText, classes.colorWhite].join(' ')}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className={[classes.messageContainer, classes.justifyStart].join(' ')}>
      <div className={[classes.messageBox, classes.backgroundLight].join(' ')}>
        <p className={[classes.messageText, classes.colorDark].join(' ')}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className={[classes.sentText, classes.pl10].join(' ')}>{user}</p>
    </div>
  );
};

export default Message;
