import styled from 'styled-components';
import { motion } from 'framer-motion';
import type * as localTypes from '../../types';

export const Checkbox = styled(motion.input)<localTypes.IDefaultChildren>`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: none;
`;

export const Input = styled(motion.input)<localTypes.IInputProps>`
  border: none;
  outline: none;
  width: 90%;
  max-width: ${(props): string => (props.$full ? '100%' : '200px')};
  font-size: 1.1em;
  background: none;
  color: ${(props): string => props.theme.colors.default};
  border-bottom: 1px solid ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.semiSlow};

  &::placeholder {
    transition: ${(props): string => props.theme.transition.semiSlow};
    color: ${(props): string => props.theme.colors.semiDefault};
  }

  &:focus {
    width: ${(props): string => (props.$full ? '100%' : '90%')};
    max-width: ${(props): string => (props.$full ? '100%' : '220px')};
    border-bottom: 1px solid ${(props): string => props.theme.colors.default};
    transition: ${(props): string => props.theme.transition.semiSlow};

    &::placeholder {
      transition: ${(props): string => props.theme.transition.semiSlow};
      color ${(props): string => props.theme.colors.default};
    }
  }
`;

export const Label = styled(motion.h2)<localTypes.IDefaultChildren>`
  font-size: 1.1rem;
  display: inline-block;
  margin-right: 1rem;
`;

export const Form = styled(motion.form)<localTypes.IDefaultChildren>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  width: fit-content;
  min-width: 350px;
  max-width: 500px;

  input {
    margin: 1rem;
  }
`;
export const Select = styled(motion.select)<localTypes.IDefaultChildren>`
  min-width: 200px;
  max-width: 300px;
  border: none;
  outline: none;
  font-size: 1.1em;
  margin: 10px;
  padding: 5px;
  box-shadow: 2px 2px 5px ${(props): string => props.theme.shadows.black};
  color: ${(props): string => props.theme.colors.default};
  background: linear-gradient(
    140deg,
    ${(props): string => props.theme.colors.default} 0.5%,
    ${(props): string => props.theme.background.semiTransparent} 0.5%
  );
  background-size: 100% 100%;
  transition: ${(props): string => props.theme.transition.default};

  option {
    background: ${(props): string => props.theme.background.default};
  }

  &:hover {
    transition: ${(props): string => props.theme.transition.default};
    background-size: 30000% 100%;
  }
`;
