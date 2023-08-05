import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import type * as localTypes from '../../types';

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
