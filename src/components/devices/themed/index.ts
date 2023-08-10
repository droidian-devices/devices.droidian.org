import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IBrandsProps } from '../../../types';

export const DeviceContainer = styled(motion.div)<IBrandsProps>`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  header {
    width: 100%;
  }

  span {
    width: 80%;
  }

  li {
    margin: 10px;
  }

  p {
    text-align: left;
    font-size: 1.2rem;
  }
`;

export const DeviceFeature = styled(motion.div)<IBrandsProps>`
  min-height: fit-content;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  span {
    width: fit-content;
  }
`;
