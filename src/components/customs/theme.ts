import type { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    default: '#ffffff',
    semiDefault: 'rgba(255, 255, 255, 0.7)',
    opposite: '#1e1e1e',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  transition: {
    fast: '0.3s all ease-in-out',
    default: '0.5s all ease-in-out',
    semiSlow: '0.75s all ease-in-out',
    slow: '1s all ease-in-out',
  },
  background: {
    default: '#25282f',
    semiTransparent: 'rgba(95, 95, 95, 0.99)',
    opposite: 'rgba(255,255,255, 0.99)',
  },
  shadows: {
    default: '#888888',
    black: '#000000',
  },
};

export default theme;
