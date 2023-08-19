import type { ReactElement } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import type { Dispatch } from '@reduxjs/toolkit';
import * as hooks from '../../../redux';
import * as animation from '../../../animation';
import { Notification } from '../themed';
import { useMainDispatch } from '../../../redux/hooks';

const renderNotification = (dispatch: Dispatch, message: string): ReactElement => {
  setTimeout(() => {
    dispatch(hooks.disableNotification());
  }, 4000);

  return (
    <Notification
      data-cy="notification-default-body"
      variants={animation.slowSlideDown}
      initial="init"
      animate="visible"
      exit="exit"
    >
      <div>
        <h3>{message}</h3>
      </div>
    </Notification>
  );
};

const Notifications: React.FC = () => {
  const dispatch = useMainDispatch();
  const { messages } = useSelector(hooks.notificationsState);

  return (
    <AnimatePresence mode="wait">
      {messages.length > 0 ? renderNotification(dispatch, messages[0]!.message) : null}
    </AnimatePresence>
  );
};

export default Notifications;
