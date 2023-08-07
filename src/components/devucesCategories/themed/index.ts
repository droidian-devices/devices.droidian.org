import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IBrandsProps } from '../../../types';

// eslint-disable-next-line import/prefer-default-export
export const Category = styled(motion.div)<IBrandsProps>`
  height: fit-content;
  overflow-y: hidden;
  overflow-x: hidden;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.semiSlow};

  &::-webkit-scrollbar {
    width: 15px;
    border-radius: 50px;
    background: ${(props): string => props.theme.background.opposite};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props): string => props.theme.colors.default};
    border-radius: 50px;

    &:hover {
      cursor: pointer;
    }
  }

  p {
    margin: 1rem;
  }

  li {
    margin: 0.5rem;
  }

  header {
    font-weight: 800;
  }
`;
