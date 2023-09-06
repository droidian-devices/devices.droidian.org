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
    font-size: 1.1rem;
    margin-bottom: 1rem;
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
    align-self: flex-start;
    max-width: 300px;
  }

  @media (max-width: 767px) {
    margin: 0 auto;
    max-width: 100%;
  }
`;

export const FeaturesBody = styled(motion.div)<IBrandsProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  span {
    display: inline-block;
    padding: 0.2rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Description = styled(motion.p)<IBrandsProps>`
  text-align: center;
`;

export const IdLink = styled(motion.i)<IBrandsProps>`
  font-size: 0.8rem;
  margin: 0 10px 0 0;
  cursor: pointer;
  transition: ${(props): string => props.theme.transition.default};
  color: ${(props): string => (props.$active ? '#3ddc84' : props.theme.colors.default)};

  &:hover {
    color: #3ddc84;
    transition: ${(props): string => props.theme.transition.default};
  }
`;
