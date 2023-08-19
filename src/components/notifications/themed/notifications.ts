import styled from 'styled-components';
import { motion } from 'framer-motion';
import type * as localTypes from '../../../types';

// eslint-disable-next-line import/prefer-default-export
export const Notification = styled(motion.div)<localTypes.INotificationProps>`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  min-height: 50px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 9;

  div {
    min-width: 250px;
    min-height: 50px;
    height: fit-content;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${(props): string => props.theme.colors.default};
    background: ${(props): string => props.theme.background.default};
    color: #3ddc84;
  }
`;
