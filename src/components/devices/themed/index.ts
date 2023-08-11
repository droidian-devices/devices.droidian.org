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

  li {
    margin: 10px;
  }

  p {
    text-align: left;
    font-size: 1.1rem;
  }
`;

export const DeviceFeature = styled(motion.div)<IBrandsProps>`
  min-height: fit-content;
  max-width: 400px;
  width: 100%;
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  span {
    width: fit-content;
  }
`;

export const FeaturesContainer = styled(motion.div)<IBrandsProps>`
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ul,
  p {
    width: 100%;
  }

  ul ul li {
    margin-left: 2rem;
  }
`;

export const FeatureContainer = styled(motion.div)<IBrandsProps>`
  width: 40%;
  min-width: 300px;

  @media (min-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
`;
