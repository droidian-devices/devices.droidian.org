import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import type * as localTypes from '../../types';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    background: ${(props): string => props.theme.background.default};
    font-family: avenir next, avenir, sans-serif;
  }
`;

export const App = styled(motion.div)<localTypes.IDefaultChildren>`
  background: ${(props): string => props.theme.background.default};
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.slow};
`;
