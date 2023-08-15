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

export const SmallHeader = styled(motion.header)<localTypes.ITextProps>`
  width: ${(props): number => (props.$full ? 100 : 50)}%;
  text-align: center;
  font-size: 1.6rem;
  letter-spacing: 0.9px;
  padding: 1rem;
`;

export const CategoryHeader = styled(motion.header)<localTypes.ICategoryHeaderProps>`
  width: ${(props): number => (props.$full ? 100 : 50)}%;
  text-align: ${(props): string => (props.$center ? 'center' : 'left')};
  border-bottom: ${(props): string => (props.$border ? '0.1px solid white' : 'none')};
  font-size: 1.4rem;
  font-weight: lighter;
  letter-spacing: 0.9px;
  padding: ${(props): string => (props.$border ? '1rem 0 0.4rem 0.6rem' : '1rem 0 0 0.6rem')};
`;

export const ImportantCategoryHeader = styled(CategoryHeader)<localTypes.ICategoryHeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  font-weight: 500;
  border-left: 2px solid #3ddc84;
  padding: 0 0 0 1rem;
  background: ${(props): string => (props.$active ? '#3ddc84' : 'none')};
  color: ${(props): string => (props.$active ? 'black' : props.theme.colors.default)};

  margin: 1rem 0 1rem 0;
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

export const Red = styled(motion.span)<localTypes.IDefaultChildren>`
  color: red;
`;

export const ImportantText = styled(motion.div)<localTypes.IDefaultChildren>`
  box-shadow: -10px 0 0 rgba(255, 255, 255, 0.7);
`;
