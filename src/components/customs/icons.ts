import styled from 'styled-components';
import { motion } from 'framer-motion';
import { moveAround, rotate } from './animations';

export const LoadingCircle = styled(motion.div)`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid ${(props): string => props.theme.colors.default};
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid transparent;
    border-right-color: ${(props): string => props.theme.colors.default};
    animation: ${rotate} 2s linear infinite;
  }
`;

export const LoadingPill = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${(props): string => props.theme.colors.default};
  box-sizing: border-box;

  &::after {
    content: '';
    background: ${(props): string => props.theme.colors.default};
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    border-radius: 10px;
    box-sizing: border-box;
    animation: ${moveAround} 2s ease-in-out infinite;
  }
`;
