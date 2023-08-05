import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as ReactLink } from 'react-router-dom';
import type * as localTypes from '../../types';

const BaseButton = styled(motion.button)<localTypes.IDefaultChildren>`
  background: linear-gradient(
    140deg,
    ${(props): string => props.theme.colors.default} 0.5%,
    ${(props): string => props.theme.background.semiTransparent} 0.5%
  );
  background-size: 100% 100%;
  color: ${(props): string => props.theme.colors.default};
  padding: 3px;
  margin: 10px 0;
  border: 2px solid ${(props): string => props.theme.colors.default};
  border-radius: 5%;
  box-shadow: 1px 1px 1px ${(props): string => props.theme.shadows.black};
  width: 80%;
  transition: ${(props): string => props.theme.transition.default};
  font-weight: 200;
  letter-spacing: 0.9px;
  cursor: pointer;

  @media (min-width: 768px) {
    &:hover {
      box-shadow: none;
      transition: ${(props): string => props.theme.transition.default};
      background-size: 30000% 100%;
    }
  }
`;

export const Button = styled(BaseButton)<localTypes.IDefaultChildren>`
  font-size: 1.5em;
  width: 80%;
  min-width: 150px;
  max-width: fit-content;
  height: 45px;
`;

const FunctionButton = styled(motion.button)<localTypes.IDefaultChildren>`
  font-size: 2.3em;
  color: ${(props): string => props.theme.colors.default};
  background: none;
  border: none;
  padding: 2px;
  margin: 0.5em 2em;
  cursor: pointer;
  z-index: 9;
`;

export const ExitButton = styled(FunctionButton)<localTypes.IDefaultChildren>`
  position: fixed;
  top: 0;
  left: 0;
`;

export const HelpButton = styled(FunctionButton)<localTypes.IDefaultChildren>`
  position: fixed;
  top: 0;
  right: 0;
`;

export const ButtonLink = styled(ReactLink)<localTypes.IDefaultChildren>`
  text-decoration: none;
  text-align: left;
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.semiSlow};
`;

export const Link = styled(ButtonLink)<localTypes.IDefaultChildren>`
  color: ${(props): string => props.theme.colors.default};

  &:hover {
    color: #3ddc84;
  }
`;
