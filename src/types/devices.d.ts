import type { EDeviceCategory, ENoteType } from '../enums';
import type { INotes } from './index';

export type IFeature = Record<string, string[]>;

export interface ILink {
  to: string;
  text: string;
  id: number;
}

export interface INoteData {
  [ENoteType.String]: string | string[];
  [ENoteType.Header]: string;
  [ENoteType.List]: (string | INotes<ENoteType>)[];
}

export interface IDevice {
  name: string;
  category: EDeviceCategory;
  code: string;
  description?: INotes<ENoteType.String>;
  features?: Record<string, IFeature>;
  notes?: Record<string, INotes<ENoteType>[]>;
}
