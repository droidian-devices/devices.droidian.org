import React from 'react';
import { Container, OverflowContainerBody } from '../../customs';
import * as animation from '../../../animation';

const Devices: React.FC = () => {
  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <OverflowContainerBody $justify="space-evenly">Devices</OverflowContainerBody>
    </Container>
  );
};

export default Devices;
