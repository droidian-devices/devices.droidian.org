import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ContainerBody, OverlayContainer } from '../../customs';
import type { IDefaultChildren, INavContentProps } from '../../../types';

export const NavbarContainer = styled(OverlayContainer)<IDefaultChildren>`
  height: 50px;
  width: 100%;
  background: url('/bookworm.png');
  background-size: cover;
`;

export const NavbarBody = styled(ContainerBody)<IDefaultChildren>`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const HomeButton = styled(motion.div)<IDefaultChildren>`
  height: 25px;
  width: 25px;
  background: url('/droidian.svg');
  background-size: cover;
  filter: sepia(100%) saturate(0%) contrast(100%);
`;

export const NavLinks = styled(ContainerBody)<INavContentProps>`
  position: fixed;
  right: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.4rem;
  font-weight: 400;
  background: #0d1117;

  @media (min-width: 768px) {
    height: 400px;
    width: 300px;
    top: ${(props): number => (props.$active ? 0 : -400)}px;
  }

  @media (max-width: 767px) {
    height: 100%;
    width: 100%;
    top: ${(props): number => (props.$active ? 0 : -100)}%;
  }
`;

export const NavToggle = styled(motion.div)<INavContentProps>`
  width: 40px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  z-index: 7;
  cursor: pointer;

  div {
    background: white !important;
    width: 30px;
    height: 3px;
    transition: ${(props): string => props.theme.transition.fast};
  }

  div:nth-of-type(1) {
    transform: rotate(${(props): number => (props.$active ? 45 : 0)}deg)
      translate(${(props): string => (props.$active ? '-2px, -1px' : '0 0')});
    transform-origin: ${(props): string => (props.$active ? '4px 0' : '0 0')};
  }

  div:nth-of-type(2) {
    opacity: ${(props): number => (props.$active ? 0 : 1)};
  }

  div:nth-of-type(3) {
    transform: rotate(${(props): number => (props.$active ? -45 : 0)}deg)
      translate(${(props): string => (props.$active ? '0, -1px' : '0 0')});
    transform-origin: ${(props): string => (props.$active ? '0 100%' : '0 0')};
  }
`;
