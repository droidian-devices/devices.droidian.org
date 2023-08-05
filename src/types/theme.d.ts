import 'styled-components';
import type { Variants } from 'framer-motion';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface DefaultTheme {
    colors: {
      default: string;
      semiDefault: string;
      opposite: string;
    };
    background: {
      default: string;
      semiTransparent: string;
      opposite: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    transition: {
      fast: string;
      default: string;
      semiSlow: string;
      slow: string;
    };

    shadows: {
      default: string;
      black: string;
    };
  }
}

/**
 * Animation variables
 */
export interface IDefaultChildren {
  variants?: Variants;
}
