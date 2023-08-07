import styled from 'styled-components';
import { motion } from 'framer-motion';
import type * as localTypes from '../../types';

export const Header = styled(motion.header)<localTypes.ITextProps>`
  width: ${(props): number => (props.$full ? 100 : 50)}%;
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 0.9px;
  padding: 1rem;
`;

export const PanelHeader = styled(Header)<localTypes.IHeaderProps>`
  width: ${(props): string => (props.$center ? '100%' : 'fit-content')};
  font-size: 2.5rem;
  align-self: ${(props): string => (props.$center ? 'inherit' : 'flex-start')};
  margin: ${(props): string => (props.$center ? '0' : '0 1')}rem;
`;

export const Green = styled(motion.span)<localTypes.IDefaultChildren>`
  color: #3ddc84;
`;

export const ImportantText = styled(motion.div)<localTypes.IDefaultChildren>`
  box-shadow: -10px 0 0 rgba(255, 255, 255, 0.7);
`;
