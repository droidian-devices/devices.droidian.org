import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IBrandsProps, IDefaultChildren } from '../../../types';
import { OverflowContainerBody } from '../../customs';

export const Brand = styled(motion.div)<IDefaultChildren>`
  width: 100%;
  height: fit-content;
  margin-top: 30px;

  header {
    cursor: pointer;
    transition: ${(props): string => props.theme.transition.default};

    &:hover {
      color: #3ddc84;
      transition: ${(props): string => props.theme.transition.default};
    }
  }
`;

export const DevicesContainer = styled(OverflowContainerBody)<IBrandsProps>`
  height: ${(props): string => (!props.$active ? '0' : 'fit-content')};
  opacity: ${(props): number => (!props.$active ? 0 : 1)};
  transition: ${(props): string => props.theme.transition.default};
`;

export const DeviceHeader = styled(motion.div)<IBrandsProps>`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  header {
    margin-left: 1.5rem;
  }

  i {
    transform: rotate(${(props): string => (!props.$active ? '0deg' : '180deg')});
  }
`;
