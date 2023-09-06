import styled from 'styled-components';
import { motion } from 'framer-motion';
import type * as localTypes from '../../types';

/**
 * Container of elements used to cover space
 */
export const Container = styled(motion.div)<localTypes.IOuterContainerProps>`
  width: 100%;
  height: 100vh;
  overflow-y: ${(props): string => (props.$overflow ? 'scroll' : 'hidden')};
  overflow-x: hidden;

  @media (min-width: 768px) {
    &::-webkit-scrollbar {
      width: 15px;
      border-radius: 50px;
      background: ${(props): string => props.theme.background.semiTransparent};
    }

    &::-webkit-scrollbar-thumb {
      background: #3ddc84;
      border-radius: 50px;
    }
  }
`;

/**
 * Container used as overlay
 */
export const OverlayContainer = styled(motion.div)<localTypes.IDefaultChildren>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 6;
`;

/**
 * Container's body used to center elements inside
 */
export const ContainerBody = styled(Container)<localTypes.IContainerProps>`
  height: ${(props): string => (props.$fillHeight ? '100%' : '100vh')};
  display: flex;
  flex-direction: ${(props): string => props.$direction ?? 'column'};
  justify-content: ${(props): string => props.$justify ?? 'center'};
  align-items: ${(props): string => props.$align ?? 'center'};
  flex-wrap: ${(props): string => props.$wrap ?? 'wrap'};
  overflow-y: ${(props): string => (props.$noScroll ? 'hidden' : 'auto')};
  overflow-x: hidden;
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.semiSlow};
`;

/**
 * Container body with added overflow to handle fixed footer. This should be changed in the future for something better
 */
export const OverflowContainerBody = styled(Container)<localTypes.IContainerProps>`
  display: flex;
  flex-direction: ${(props): string => props.$direction ?? 'column'};
  justify-content: ${(props): string => props.$justify ?? 'center'};
  align-items: ${(props): string => props.$align ?? 'center'};
  flex-wrap: ${(props): string => props.$wrap ?? 'wrap'};
  overflow-y: ${(props): string => (props.$noScroll ? 'hidden' : 'auto')};
  overflow-x: hidden;
  padding-bottom: 100px;
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.semiSlow};
`;
