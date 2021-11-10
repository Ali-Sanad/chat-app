import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import classes from './TextContainer.module.css';

const TextContainer = ({users, room}) => (
  <div className={classes.textContainer}>
    <div>
      <h1>
        Realtime Chat Application{' '}
        <span role='img' aria-label='emoji'>
          💬
        </span>
      </h1>
      <h2>
        Created with React, Node and Socket.IO{' '}
        <span role='img' aria-label='emoji'>
          ❤️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h2>
          Current room:{' '}
          <span className={classes.currentRoom}>{room.toUpperCase()}</span>
        </h2>
        <h2>
          People online:{' '}
          <span className={classes.onlineUsers}>
            {users.length ? users.length : '0'}
          </span>
        </h2>
        <div className={classes.activeContainer}>
          <h3>
            {users.map(({name}) => (
              <div key={name} className={classes.activeItem}>
                {name}
                <img alt='Online Icon' src={onlineIcon} />
              </div>
            ))}
          </h3>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
