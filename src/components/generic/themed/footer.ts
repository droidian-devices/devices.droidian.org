import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IDefaultChildren, IFooterProps } from '../../../types';

export const FooterContainer = styled(motion.div)<IFooterProps>`
  position: fixed;
  background: #0d1117;
  bottom: ${(props): number => (props.$active ? -75 : 0)};
  width: 100%;
  height: 75px;
`;

export const FooterBody = styled(motion.div)<IDefaultChildren>`
  height: 100%;
  display: flex;
  color: ${(props): string => props.theme.colors.semiDefault};
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: hidden;
  overflow-x: hidden;
  font-size: 1.1rem;

  * {
    margin: 5px;
  }
`;
