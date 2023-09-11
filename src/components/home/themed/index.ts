import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IDefaultChildren } from '../../../types';

export const HomeHeader = styled(motion.div)<IDefaultChildren>`
  height: 200px;
  width: 100%;
  background: url('/bookworm.png');
  background-size: cover;

  div {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);

    display: flex;
    flex-wrap: wrap;
    overflow-y: hidden;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      align-content: space-evenly;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    }
  }
`;

export const HomeIcon = styled(motion.div)<IDefaultChildren>`
  min-height: 300px;
  height: 450px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: hidden;
  cursor: pointer;
  transition: ${(props): string => props.theme.transition.default};

  @media (min-width: 768px) {
    i {
      font-size: 8vw;
    }

    header {
      font-size: 2vw;
    }

    p {
      font-size: 1.5vw;
    }
  }

  @media (max-width: 767px) {
    i {
      font-size: 5rem;
    }
  }

  header {
    transition: ${(props): string => props.theme.transition.default};
    color: #3ddc84;
    font-weight: 500;
  }

  &:hover {
    transition: ${(props): string => props.theme.transition.default};
    color: #3ddc84;

    header {
      color: #3ddc84;
      transition: ${(props): string => props.theme.transition.default};
    }
  }
`;
