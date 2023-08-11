import type { ENoteType } from '../enums';
import type { ILink, INoteData } from './devices';

export * from './theme';
export * from './customs';
export * from './errors';
export * from './devices';

export interface INotes<T extends ENoteType> {
  type: T;
  data: INoteData[T];
  links?: ILink[];
}
