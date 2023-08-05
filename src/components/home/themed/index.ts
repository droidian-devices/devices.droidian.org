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
  height: 300px;
  width: fit-content;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: hidden;
  cursor: pointer;

  i {
    font-size: 5rem;
  }

  header {
    color: #3ddc84;
    font-weight: 500;
  }
`;
