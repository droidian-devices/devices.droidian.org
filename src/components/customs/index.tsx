import React from 'react';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';

export * from './buttons';
export * from './generic';
export * from './containers';
export * from './text';

const Theme: React.FC<{
  children: React.ReactNode;
  theme: DefaultTheme;
}> = ({ children, theme }) => {
  const th = { ...theme };
  return <ThemeProvider theme={th}>{children}</ThemeProvider>;
};

export default Theme;
