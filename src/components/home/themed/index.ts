import styled from 'styled-components';
import { IDefaultChildren } from '../../../types';
import { motion } from 'framer-motion';

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
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
  }
`;
