import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IBrandsProps } from '../../../types';
import { Container } from '../../customs';

export const CategoryContainer = styled(motion.div)<IBrandsProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  margin-top: 50px;
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.default};

  @media (min-width: 768px) {
    height: 10%;
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 70px;
  }
`;

export const CategoryOuterContainer = styled(motion.div)<IBrandsProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 1500px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

export const Category = styled(motion.div)<IBrandsProps>`
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  i {
    transform: rotate(${(props): string => (props.$active ? '180deg' : '0')});
    transition: ${(props): string => props.theme.transition.default};
  }

  header {
    width: 90%;
    padding-left: 10%;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    height: 40%;
    width: 40%;

    header {
      font-size: 2.5vw;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    height: fit-content;
  }
`;

export const DevicesContainer = styled(motion.div)<IBrandsProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;

  header {
    color: ${(props): string => props.theme.colors.default};
  }

  div {
    cursor: pointer;
    margin: 2px;
  }

  span {
    width: 100%;
    text-align: center;
  }

  p {
    font-size: 1.3rem;
    padding: 15px;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const DeviceCategoryContainer = styled(Container)<IBrandsProps>`
  margin-bottom: 75px;
`;
