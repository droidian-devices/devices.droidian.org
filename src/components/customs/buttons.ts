import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import type * as localTypes from '../../types';

const BaseButton = styled(motion.button)<localTypes.IDefaultChildren>`
  color: ${(props): string => props.theme.colors.default};
  padding: 3px;
  margin: 10px 0;
  border-radius: 5%;
  background: #0d1117;
  border: none;
  box-shadow: 1px 1px 1px ${(props): string => props.theme.shadows.black};
  width: 80%;
  transition: ${(props): string => props.theme.transition.default};
  font-weight: 200;
  letter-spacing: 0.9px;
  cursor: pointer;

  @media (min-width: 768px) {
    &:hover {
      color: #3ddc84;
      box-shadow: none;
      transition: ${(props): string => props.theme.transition.default};
    }
  }
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

export const VisibleLink = styled(ButtonLink)<localTypes.IDefaultChildren>`
  color: ${(props): string => props.theme.colors.default};
  text-decoration: underline white;

  &:hover {
    color: #3ddc84;
  }
`;

export const Button = styled(BaseButton)<localTypes.IDefaultChildren>`
  font-size: 1.5em;
  width: 80%;
  min-width: 150px;
  max-width: fit-content;
  height: 45px;
`;
