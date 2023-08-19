import type { PayloadAction } from '@reduxjs/toolkit';

export interface INotification {
  message: string;
}

export interface INotificationsState {
  messages: INotification[];
}

export interface INotificationActionBody {
  message: string;
}

export type INotificationAction = PayloadAction<INotificationActionBody>;
